.PHONY: all init format lint build build_frontend install_frontend run_frontend run_backend dev help tests coverage clean_python_cache clean_npm_cache clean_all

# Configurations
VERSION=$(shell grep "^version" pyproject.toml | sed 's/.*\"\(.*\)\"$$/\1/')
DOCKERFILE=docker/build_and_push.Dockerfile
DOCKERFILE_BACKEND=docker/build_and_push_backend.Dockerfile
DOCKERFILE_FRONTEND=docker/frontend/build_and_push_frontend.Dockerfile
DOCKER_COMPOSE=docker_example/docker-compose.yml
PYTHON_REQUIRED=$(shell grep '^requires-python[[:space:]]*=' pyproject.toml | sed -n 's/.*"\([^"]*\)".*/\1/p')
RED=\033[0;31m
NC=\033[0m # No Color
GREEN=\033[0;32m

log_level ?= debug
host ?= 0.0.0.0
port ?= 7860
env ?= .env
open_browser ?= true
path = src/backend/base/langinfra/frontend
workers ?= 1
async ?= true
lf ?= false
ff ?= true
all: help

######################
# UTILITIES
######################

# increment the patch version of the current package
patch: ## bump the version in langinfra and langinfra-base
	@echo 'Patching the version'
	@poetry version patch
	@echo 'Patching the version in langinfra-base'
	@cd src/backend/base && poetry version patch
	@make lock

# check for required tools
check_tools:
	@command -v uv >/dev/null 2>&1 || { echo >&2 "$(RED)uv is not installed. Aborting.$(NC)"; exit 1; }
	@command -v npm >/dev/null 2>&1 || { echo >&2 "$(RED)NPM is not installed. Aborting.$(NC)"; exit 1; }
	@echo "$(GREEN)All required tools are installed.$(NC)"


help: ## show this help message
	@echo '----'
	@grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | \
	awk -F ':.*##' '{printf "\033[36mmake %s\033[0m: %s\n", $$1, $$2}' | \
	column -c2 -t -s :
	@echo '----'

######################
# INSTALL PROJECT
######################

reinstall_backend: ## forces reinstall all dependencies (no caching)
	@echo 'Installing backend dependencies'
	@uv sync -n --reinstall --frozen

install_backend: ## install the backend dependencies
	@echo 'Installing backend dependencies'
	@uv sync --frozen

install_frontend: ## install the frontend dependencies
	@echo 'Installing frontend dependencies'
	@cd src/frontend && npm install > /dev/null 2>&1

build_frontend: ## build the frontend static files
	@echo 'Building frontend static files'
	@cd src/frontend && CI='' npm run build > /dev/null 2>&1
	@rm -rf src/backend/base/langinfra/frontend
	@cp -r src/frontend/build src/backend/base/langinfra/frontend

init: check_tools clean_python_cache clean_npm_cache ## initialize the project
	@make install_backend
	@make install_frontend
	@make build_frontend
	@echo "$(GREEN)All requirements are installed.$(NC)"
	@uv run langinfra run

######################
# CLEAN PROJECT
######################

clean_python_cache:
	@echo "Cleaning Python cache..."
	find . -type d -name '__pycache__' -exec rm -r {} +
	find . -type f -name '*.py[cod]' -exec rm -f {} +
	find . -type f -name '*~' -exec rm -f {} +
	find . -type f -name '.*~' -exec rm -f {} +
	find . -type d -empty -delete
	@echo "$(GREEN)Python cache cleaned.$(NC)"

clean_npm_cache:
	@echo "Cleaning npm cache..."
	cd src/frontend && npm cache clean --force
	rm -rf src/frontend/node_modules src/frontend/build src/backend/base/langinfra/frontend src/frontend/package-lock.json
	@echo "$(GREEN)NPM cache and frontend directories cleaned.$(NC)"

clean_all: clean_python_cache clean_npm_cache # clean all caches and temporary directories
	@echo "$(GREEN)All caches and temporary directories cleaned.$(NC)"

setup_uv: ## install poetry using pipx
	pipx install uv

add:
	@echo 'Adding dependencies'
ifdef devel
	@cd src/backend/base && uv add --group dev $(devel)
endif

ifdef main
	@uv add $(main)
endif

ifdef base
	@cd src/backend/base && uv add $(base)
endif



######################
# CODE TESTS
######################

coverage: ## run the tests and generate a coverage report
	@uv run coverage run
	@uv run coverage erase

unit_tests: ## run unit tests
	@uv sync --extra dev --frozen
	@EXTRA_ARGS=""
	@if [ "$(async)" = "true" ]; then \
		EXTRA_ARGS="$$EXTRA_ARGS --instafail -n auto"; \
	fi; \
	if [ "$(lf)" = "true" ]; then \
		EXTRA_ARGS="$$EXTRA_ARGS --lf"; \
	fi; \
	if [ "$(ff)" = "true" ]; then \
		EXTRA_ARGS="$$EXTRA_ARGS --ff"; \
	fi; \
	uv run pytest src/backend/tests --ignore=src/backend/tests/integration $$EXTRA_ARGS --instafail -ra -m 'not api_key_required' --durations-path src/backend/tests/.test_durations --splitting-algorithm least_duration $(args)

unit_tests_looponfail:
	@make unit_tests args="-f"

integration_tests:
	uv run pytest src/backend/tests/integration \
		--instafail -ra \
		$(args)

integration_tests_no_api_keys:
	uv run pytest src/backend/tests/integration \
		--instafail -ra -m "not api_key_required" \
		$(args)

integration_tests_api_keys:
	uv run pytest src/backend/tests/integration \
		--instafail -ra -m "api_key_required" \
		$(args)

tests: ## run unit, integration, coverage tests
	@echo 'Running Unit Tests...'
	make unit_tests
	@echo 'Running Integration Tests...'
	make integration_tests
	@echo 'Running Coverage Tests...'
	make coverage

######################
# CODE QUALITY
######################

codespell: ## run codespell to check spelling
	@poetry install --with spelling
	poetry run codespell --toml pyproject.toml

fix_codespell: ## run codespell to fix spelling errors
	@poetry install --with spelling
	poetry run codespell --toml pyproject.toml --write

format: ## run code formatters
	@uv run ruff check . --fix
	@uv run ruff format . --config pyproject.toml
	@cd src/frontend && npm run format

unsafe_fix:
	@uv run ruff check . --fix --unsafe-fixes

lint: install_backend ## run linters
	@uv run mypy --namespace-packages -p "langinfra"

install_frontendci:
	@cd src/frontend && npm ci > /dev/null 2>&1

install_frontendc:
	@cd src/frontend && rm -rf node_modules package-lock.json && npm install > /dev/null 2>&1

run_frontend: ## run the frontend
	@-kill -9 `lsof -t -i:3000`
	@cd src/frontend && npm start

tests_frontend: ## run frontend tests
ifeq ($(UI), true)
	@cd src/frontend && npx playwright test --ui --project=chromium
else
	@cd src/frontend && npx playwright test --project=chromium
endif

run_cli: install_frontend install_backend build_frontend ## run the CLI
	@echo 'Running the CLI'
	@uv run langinfra run \
		--frontend-path $(path) \
		--log-level $(log_level) \
		--host $(host) \
		--port $(port) \
		$(if $(env),--env-file $(env),) \
		$(if $(filter false,$(open_browser)),--no-open-browser)

run_cli_debug:
	@echo 'Running the CLI in debug mode'
	@make install_frontend > /dev/null
	@echo 'Building the frontend'
	@make build_frontend > /dev/null
	@echo 'Install backend dependencies'
	@make install_backend > /dev/null
ifdef env
	@make start env=$(env) host=$(host) port=$(port) log_level=debug
else
	@make start host=$(host) port=$(port) log_level=debug
endif


setup_devcontainer: ## set up the development container
	make install_backend
	make install_frontend
	make build_frontend
	uv run langinfra --frontend-path src/frontend/build

setup_env: ## set up the environment
	@sh ./scripts/setup/setup_env.sh

frontend: install_frontend ## run the frontend in development mode
	make run_frontend

frontendc: install_frontendc
	make run_frontend


backend: setup_env install_backend ## run the backend in development mode
	@-kill -9 $$(lsof -t -i:7860) || true
ifdef login
	@echo "Running backend autologin is $(login)";
	LANGINFRA_AUTO_LOGIN=$(login) uv run uvicorn \
		--factory langinfra.main:create_app \
		--host 0.0.0.0 \
		--port $(port) \
		$(if $(filter-out 1,$(workers)),, --reload) \
		--env-file $(env) \
		--loop asyncio \
		$(if $(workers),--workers $(workers),)
else
	@echo "Running backend respecting the $(env) file";
	uv run uvicorn \
		--factory langinfra.main:create_app \
		--host 0.0.0.0 \
		--port $(port) \
		$(if $(filter-out 1,$(workers)),, --reload) \
		--env-file $(env) \
		--loop asyncio \
		$(if $(workers),--workers $(workers),)
endif

build_and_run: setup_env ## build the project and run it
	rm -rf dist
	rm -rf src/backend/base/dist
	make build
	uv run pip install dist/*.tar.gz
	uv run langinfra run

build_and_install: ## build the project and install it
	@echo 'Removing dist folder'
	rm -rf dist
	rm -rf src/backend/base/dist
	make build && uv run pip install dist/*.whl && pip install src/backend/base/dist/*.whl --force-reinstall

build: setup_env ## build the frontend static files and package the project
ifdef base
	make install_frontendci
	make build_frontend
	make build_langinfra_base args="$(args)"
endif

ifdef main
	make install_frontendci
	make build_frontend
	make build_langinfra_base args="$(args)"
	make build_langinfra args="$(args)"
endif

build_langinfra_base:
	cd src/backend/base && uv build $(args)
	rm -rf src/backend/base/langinfra/frontend

build_langinfra_backup:
	uv lock && uv build

build_langinfra:
	uv lock --no-upgrade
	uv build $(args)
ifdef restore
	mv pyproject.toml.bak pyproject.toml
	mv uv.lock.bak uv.lock
endif


docker_build: dockerfile_build clear_dockerimage ## build DockerFile

docker_build_backend: dockerfile_build_be clear_dockerimage ## build Backend DockerFile

docker_build_frontend: dockerfile_build_fe clear_dockerimage ## build Frontend Dockerfile

dockerfile_build:
	@echo 'BUILDING DOCKER IMAGE: ${DOCKERFILE}'
	@docker build --rm \
		-f ${DOCKERFILE} \
		-t langinfra:${VERSION} .

dockerfile_build_be: dockerfile_build
	@echo 'BUILDING DOCKER IMAGE BACKEND: ${DOCKERFILE_BACKEND}'
	@docker build --rm \
		--build-arg LANGINFRA_IMAGE=langinfra:${VERSION} \
		-f ${DOCKERFILE_BACKEND} \
		-t langinfra_backend:${VERSION} .

dockerfile_build_fe: dockerfile_build
	@echo 'BUILDING DOCKER IMAGE FRONTEND: ${DOCKERFILE_FRONTEND}'
	@docker build --rm \
		--build-arg LANGINFRA_IMAGE=langinfra:${VERSION} \
		-f ${DOCKERFILE_FRONTEND} \
		-t langinfra_frontend:${VERSION} .

clear_dockerimage:
	@echo 'Clearing the docker build'
	@if docker images -f "dangling=true" -q | grep -q '.*'; then \
		docker rmi $$(docker images -f "dangling=true" -q); \
	fi

docker_compose_up: docker_build docker_compose_down
	@echo 'Running docker compose up'
	docker compose -f $(DOCKER_COMPOSE) up --remove-orphans

docker_compose_down:
	@echo 'Running docker compose down'
	docker compose -f $(DOCKER_COMPOSE) down || true

dcdev_up:
	@echo 'Running docker compose up'
	docker compose -f docker/dev.docker-compose.yml down || true
	docker compose -f docker/dev.docker-compose.yml up --remove-orphans

lock_base:
	cd src/backend/base && uv lock

lock_langinfra:
	uv lock

lock: ## lock dependencies
	@echo 'Locking dependencies'
	cd src/backend/base && uv lock
	uv lock

update: ## update dependencies
	@echo 'Updating dependencies'
	cd src/backend/base && uv sync --upgrade
	uv sync --upgrade

publish_base:
	cd src/backend/base && uv publish

publish_langinfra:
	uv publish

publish_base_testpypi:
	# TODO: update this to use the test-pypi repository
	cd src/backend/base && uv publish -r test-pypi

publish_langinfra_testpypi:
	# TODO: update this to use the test-pypi repository
	uv publish -r test-pypi

publish: ## build the frontend static files and package the project and publish it to PyPI
	@echo 'Publishing the project'
ifdef base
	make publish_base
endif

ifdef main
	make publish_langinfra
endif

publish_testpypi: ## build the frontend static files and package the project and publish it to PyPI
	@echo 'Publishing the project'

ifdef base
	#TODO: replace with uvx twine upload dist/*
	poetry config repositories.test-pypi https://test.pypi.org/legacy/
	make publish_base_testpypi
endif

ifdef main
	#TODO: replace with uvx twine upload dist/*
	poetry config repositories.test-pypi https://test.pypi.org/legacy/
	make publish_langinfra_testpypi
endif


# example make alembic-revision message="Add user table"
alembic-revision: ## generate a new migration
	@echo 'Generating a new Alembic revision'
	cd src/backend/base/langinfra/ && uv run alembic revision --autogenerate -m "$(message)"


alembic-upgrade: ## upgrade database to the latest version
	@echo 'Upgrading database to the latest version'
	cd src/backend/base/langinfra/ && uv run alembic upgrade head

alembic-downgrade: ## downgrade database by one version
	@echo 'Downgrading database by one version'
	cd src/backend/base/langinfra/ && uv run alembic downgrade -1

alembic-current: ## show current revision
	@echo 'Showing current Alembic revision'
	cd src/backend/base/langinfra/ && uv run alembic current

alembic-history: ## show migration history
	@echo 'Showing Alembic migration history'
	cd src/backend/base/langinfra/ && uv run alembic history --verbose

alembic-check: ## check migration status
	@echo 'Running alembic check'
	cd src/backend/base/langinfra/ && uv run alembic check

alembic-stamp: ## stamp the database with a specific revision
	@echo 'Stamping the database with revision $(revision)'
	cd src/backend/base/langinfra/ && uv run alembic stamp $(revision)