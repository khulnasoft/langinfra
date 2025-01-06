---
title: Dockers
lug: /deployment-docker
---



This guide will help you get LangInfra up and running using Docker and Docker Compose.


## Prerequisites {#856bb2d98156402bbd1980365b98110c}


---

- Docker
- Docker Compose

## Docker {#55b5d304f2294e47b0dcd3e069cf5e67}


---


### Clone repo and build Docker container {#ba89773aa8b8425b985bfe7ba91c35cc}

1. Clone the LangInfra repository:

	`git clone https://github.com/khulnasoft/langinfra.git`

2. Navigate to the `docker_example` directory:

	`cd langinfra/docker_example`

3. Run the Docker Compose file:

	`docker compose up`


LangInfra will now be accessible at `http://localhost:7860/`.


### Docker Compose configuration {#02226209cad24185a6ec5b69bd820d0f}


The Docker Compose configuration spins up two services: `langinfra` and `postgres`.


### LangInfra service {#d749848451ea43bd86f6f096dc77e6e6}


The `langinfra` service uses the `khulnasoft/langinfra:latest` Docker image and exposes port 7860. It depends on the `postgres` service.


Environment variables:

- `LANGINFRA_DATABASE_URL`: The connection string for the PostgreSQL database.
- `LANGINFRA_CONFIG_DIR`: The directory where LangInfra stores logs, file storage, monitor data, and secret keys.

Volumes:

- `langinfra-data`: This volume is mapped to `/var/lib/langinfra` in the container.

### PostgreSQL service {#121140decbfe4997b12213bdd2c4da7e}


The `postgres` service uses the `postgres:16` Docker image and exposes port 5432.


Environment variables:

- `POSTGRES_USER`: The username for the PostgreSQL database.
- `POSTGRES_PASSWORD`: The password for the PostgreSQL database.
- `POSTGRES_DB`: The name of the PostgreSQL database.

Volumes:

- `langinfra-postgres`: This volume is mapped to `/var/lib/postgresql/data` in the container.

### Switch to a specific LangInfra version {#2b3e191ea48f4feab89242433cf012d5}


If you want to use a specific version of LangInfra, you can modify the `image` field under the `langinfra` service in the Docker Compose file. For example, to use version 1.0-alpha, change `khulnasoft/langinfra:latest` to `khulnasoft/langinfra:1.0-alpha`.

