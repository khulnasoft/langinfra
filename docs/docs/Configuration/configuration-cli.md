---
title: Langinfra CLI
sidebar_position: 2
slug: /configuration-cli
---

# Langinfra CLI

The Langinfra command line interface (Langinfra CLI) is the main interface for managing and running the Langinfra server.

## CLI commands

The following sections describe the available CLI commands and their options, as well as their corresponding [environment variables](./environment-variables.md).

### langinfra

Running the CLI without any arguments displays a list of available options and commands.

```bash
langinfra [OPTIONS]
# or
python -m langinfra [OPTIONS]
```

#### Options

| Option | Default | Values | Description |
|--------|------|-----------|-------------|
| <a id="install-completion"></a>`--install-completion` | *Not applicable* | *Not applicable* | Install auto-completion for the current shell. |
| <a id="show-completion"></a>`--show-completion` | *Not applicable* | *Not applicable* | Show the location of the auto-completion config file (if installed). |
| <a id="help"></a>`--help` | *Not applicable* | *Not applicable* | Display information about the command usage and its options and arguments. |

### langinfra api-key

Create an API key for the default superuser if the [`LANGINFRA_AUTO_LOGIN` environment variable] is set to `true`.

```bash
langinfra api-key [OPTIONS]
# or
python -m langinfra api-key [OPTIONS]
```

#### Options

| Option | Default | Values | Description |
|--------|---------|--------|-------------|
| <a id="api-key-log-level"></a>`--log-level` | `critical` | `debug`<br/>`info`<br/>`warning`<br/>`error`<br/>`critical` | Set the logging level. |
| <a id="api-key-help"></a>`--help` | *Not applicable* | *Not applicable* | Display information about the command usage and its options and arguments. |

### langinfra copy-db

Copy the database files to the current directory.
Copy the Langinfra database files, `langinfra.db` and `langinfra-pre.db` (if they exist), from the cache directory to the current directory.

:::note
The current directory is the directory containing `__main__.py`.
You can find this directory by running `which langinfra`.
:::

```bash
langinfra copy-db
# or
python -m langinfra copy-db
```

#### Options

| Option | Default | Values | Description |
|--------|---------|--------|-------------|
| <a id="copy-db-help"></a>`--help` | *Not applicable* | *Not applicable* | Display information about the command usage and its options and arguments. |

### langinfra migration

Run or test database migrations.

```bash
langinfra migration [OPTIONS]
# or
python -m langinfra migration [OPTIONS]
```

#### Options

| Option | Default | Values | Description |
|--------|---------|--------|-------------|
| <a id="migration-test"></a>`--test` | `true` | [Boolean](#boolean) | Run migrations in test mode. Use `--no-test` to disable test mode. |
| <a id="migration-fix"></a>`--fix` | `false` (`--no-fix`) | [Boolean](#boolean) | Fix migrations. This is a destructive operation, and all affected data will be deleted. Only use this option if you know what you are doing. |
| <a id="migration-help"></a>`--help` | *Not applicable* | *Not applicable* | Display information about the command usage and its options and arguments. |


### langinfra run

Start the Langinfra server.

```bash
langinfra run [OPTIONS]
# or
python -m langinfra run [OPTIONS]
```

#### Options

| Option | Default | Values | Description |
|--------|---------|--------|-------------|
| <a id="run-host"></a>`--host` | `127.0.0.1` | String | The host on which the Langinfra server will run.<br/>See [`LANGINFRA_HOST` variable](./environment-variables.md#LANGINFRA_HOST). |
| <a id="run-workers"></a>`--workers` | `1` | Integer | Number of worker processes.<br/>See [`LANGINFRA_WORKERS` variable](./environment-variables.md#LANGINFRA_WORKERS). |
| <a id="run-worker-timeout"></a>`--worker-timeout` | `300` | Integer | Worker timeout in seconds.<br/>See [`LANGINFRA_WORKER_TIMEOUT` variable](./environment-variables.md#LANGINFRA_WORKER_TIMEOUT). |
| <a id="run-port"></a>`--port` | `7860` | Integer | The port on which the Langinfra server will run. The server automatically selects a free port if the specified port is in use.<br/>See [`LANGINFRA_PORT` variable](./environment-variables.md#LANGINFRA_PORT). |
| <a id="run-components-path"></a>`--components-path` | `langinfra/components` | String | Path to the directory containing custom components.<br/>See [`LANGINFRA_COMPONENTS_PATH` variable](./environment-variables.md#LANGINFRA_COMPONENTS_PATH). |
| <a id="run-env-file"></a>`--env-file` | Not set | String | Path to the `.env` file containing environment variables.<br/>See [Import environment variables from a .env file](./environment-variables.md#configure-variables-env-file). |
| <a id="run-log-level"></a>`--log-level` | `critical` | `debug`<br/>`info`<br/>`warning`<br/>`error`<br/>`critical` | Set the logging level.<br/>See [`LANGINFRA_LOG_LEVEL` variable](./environment-variables.md#LANGINFRA_LOG_LEVEL). |
| <a id="run-log-file"></a>`--log-file` | `logs/langinfra.log` | String | Set the path to the log file for Langinfra.<br/>See [`LANGINFRA_LOG_FILE` variable](./environment-variables.md#LANGINFRA_LOG_FILE). |
| <a id="run-cache"></a>`--cache` | `InMemoryCache` | `InMemoryCache`<br/>`SQLiteCache` | Type of cache to use.<br/>See [`LANGINFRA_LANGCHAIN_CACHE` variable](./environment-variables.md#LANGINFRA_LANGCHAIN_CACHE). |
| <a id="run-dev"></a>`--dev` | `false` (`--no-dev`) | [Boolean](#boolean) | Run Langinfra in development mode (may contain bugs).<br/>See [`LANGINFRA_DEV` variable](./environment-variables.md#LANGINFRA_DEV). |
| <a id="run-frontend-path"></a>`--frontend-path` | `./frontend` | String | Path to the frontend directory containing build files. This is for development purposes only.<br/>See [`LANGINFRA_FRONTEND_PATH` variable](./environment-variables.md#LANGINFRA_FRONTEND_PATH). |
| <a id="run-open-browser"></a>`--open-browser` | `true` | [Boolean](#boolean) | Open the system web browser on startup. Use `--no-open-browser` to disable opening the system web browser on startup.<br/> See [`LANGINFRA_OPEN_BROWSER` variable](./environment-variables.md#LANGINFRA_OPEN_BROWSER). |
| <a id="run-remove-api-keys"></a>`--remove-api-keys` | `false` (`--no-remove-api-keys`) | [Boolean](#boolean) | Remove API keys from the projects saved in the database.<br/> See [`LANGINFRA_REMOVE_API_KEYS` variable](./environment-variables.md#LANGINFRA_REMOVE_API_KEYS). |
| <a id="run-backend-only"></a>`--backend-only` | `false` (`--no-backend-only`) | [Boolean](#boolean) | Only run Langinfra's backend server (no frontend).<br/>See [`LANGINFRA_BACKEND_ONLY` variable](./environment-variables.md#LANGINFRA_BACKEND_ONLY). |
| <a id="run-store"></a>`--store` | `true` | [Boolean](#boolean) | Enable the Langinfra Store features. Use `--no-store` to disable the Langinfra Store features.<br/>See [`LANGINFRA_STORE` variable](./environment-variables.md#LANGINFRA_STORE). |
| <a id="run-auto-saving"></a>`--auto-saving` | `true` | [Boolean](#boolean) | Enable flow auto-saving. Use `--no-auto-saving` to disable flow auto-saving.<br/>See [`LANGINFRA_AUTO_SAVING` variable](./environment-variables.md#LANGINFRA_AUTO_SAVING). |
| <a id="run-auto-saving-interval"></a>`--auto-saving-interval` | `1000` | Integer | Set the interval for flow auto-saving in milliseconds.<br/>See [`LANGINFRA_AUTO_SAVING_INTERVAL` variable](./environment-variables.md#LANGINFRA_AUTO_SAVING_INTERVAL). |
| <a id="run-health-check-max-retries"></a>`--health-check-max-retries` | `5` | Integer | Set the maximum number of retries for the health check. Use `--no-health-check-max-retries` to disable the maximum number of retries for the health check.<br/>See [`LANGINFRA_HEALTH_CHECK_MAX_RETRIES` variable](./environment-variables.md#LANGINFRA_HEALTH_CHECK_MAX_RETRIES). |
| <a id="run-max-file-size-upload"></a>`--max-file-size-upload` | `100` | Integer | Set the maximum file size for the upload in megabytes.<br/>See [`LANGINFRA_MAX_FILE_SIZE_UPLOAD` variable](./environment-variables.md#LANGINFRA_MAX_FILE_SIZE_UPLOAD). |
| <a id="run-help"></a>`--help` | *Not applicable* | *Not applicable* | Display information about the command usage and its options and arguments. |

### langinfra superuser

Create a superuser account.

```bash
langinfra superuser [OPTIONS]
# or
python -m langinfra superuser [OPTIONS]
```

#### Options

| Option | Default | Values | Description |
|--------|---------|--------|-------------|
| <a id="superuser-username"></a>`--username` | Required | String | Specify the name for the superuser.<br/>See [`LANGINFRA_SUPERUSER` variable](./environment-variables.md#LANGINFRA_SUPERUSER). |
| <a id="superuser-password"></a>`--password` | Required | String | Specify the password for the superuser.<br/>See [`LANGINFRA_SUPERUSER_PASSWORD` variable](./environment-variables.md#LANGINFRA_SUPERUSER_PASSWORD). |
| <a id="superuser-log-level"></a>`--log-level` | `critical` | `debug`<br/>`info`<br/>`warning`<br/>`error`<br/>`critical` | Set the logging level. |

## Precedence

Langinfra CLI options override the values of corresponding [environment variables](./environment-variables.md).

For example, if you have `LANGINFRA_PORT=7860` defined as an environment variable, but you run the CLI with `--port 7880`, then Langinfra will set the port to **`7880`** (the value passed with the CLI).

## Assign values

There are two ways you can assign a value to a CLI option.
You can write the option flag and its value with a single space between them: `--option value`.
Or, you can write them using an equals sign (`=`) between the option flag and the value: `--option=value`.

Values that contain spaces must be surrounded by quotation marks: `--option 'Value with Spaces'` or `--option='Value with Spaces'`.

### Boolean values {#boolean}

Boolean options turn a behavior on or off, and therefore accept no arguments.
To activate a boolean option, type it on the command line.
For example:

```bash
langinfra run --remove-api-keys
```

All boolean options have a corresponding option that negates it.
For example, the negating option for `--remove-api-keys` is `--no-remove-api-keys`.
These options let you negate boolean options that you may have set using [environment variables](./environment-variables.md).