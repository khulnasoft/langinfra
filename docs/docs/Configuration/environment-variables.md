---
title: Environment variables
sidebar_position: 7
slug: /environment-variables
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Langinfra lets you configure a number of settings using environment variables.

## Configure environment variables

Langinfra recognizes [supported environment variables](#supported-variables) from the following sources:

- Environment variables that you've set in your terminal.
- Environment variables that you've imported from a `.env` file using the `--env-file` option in the Langinfra CLI.

You can choose to use one source exclusively, or use both sources together.
If you choose to use both sources together, be aware that environment variables imported from a `.env` file take [precedence](#precedence) over those set in your terminal.

### Set environment variables in your terminal {#configure-variables-terminal}

Run the following commands to set environment variables for your current terminal session:

<Tabs>

<TabItem value="linux-macos" label="Linux or macOS" default>
```bash
export VARIABLE_NAME='VALUE'
```
</TabItem>

<TabItem value="windows" label="Windows" default>
```
set VARIABLE_NAME='VALUE'
```
</TabItem>

<TabItem value="docker" label="Docker" default>
```bash
docker run -it --rm \
    -p 7860:7860 \
    -e VARIABLE_NAME='VALUE' \
    langinfraai/langinfra:latest
```
</TabItem>

</Tabs>

When you start Langinfra, it looks for environment variables that you've set in your terminal.
If it detects a supported environment variable, then it automatically adopts the specified value, subject to [precedence rules](#precedence).

### Import environment variables from a .env file {#configure-variables-env-file}

1. Create a `.env` file and open it in your preferred editor.

2. Add your environment variables to the file:

    ```plaintext title=".env"
    VARIABLE_NAME='VALUE'
    VARIABLE_NAME='VALUE'
    ```

    :::tip
    The Langinfra project includes a [`.env.example`](https://github.com/khulnasoft/langinfra/blob/main/.env.example) file to help you get started.
    You can copy the contents of this file into your own `.env` file and replace the example values with your own preferred settings.
    :::

3. Save and close the file.

4. Start Langinfra using the `--env-file` option to define the path to your `.env` file:

   <Tabs>

    <TabItem value="local" label="Local" default>
    ```bash
    python -m langinfra run --env-file .env
    ```
    </TabItem>

    <TabItem value="docker" label="Docker" default>
    ```bash
    docker run -it --rm \
        -p 7860:7860 \
        --env-file .env \
        langinfraai/langinfra:latest
    ```
    </TabItem>

    </Tabs>

On startup, Langinfra imports the environment variables from your `.env` file, as well as any that you [set in your terminal](#configure-variables-terminal), and adopts their specified values.

## Precedence {#precedence}

Environment variables [defined in the .env file](#configure-variables-env-file) take precedence over those [set in your terminal](#configure-variables-terminal).
That means, if you happen to set the same environment variable in both your terminal and your `.env` file, Langinfra adopts the value from the the `.env` file.

:::info[CLI precedence]
[Langinfra CLI options](./configuration-cli.md) override the value of corresponding environment variables defined in the `.env` file as well as any environment variables set in your terminal.
:::

## Supported environment variables {#supported-variables}

The following table lists the environment variables supported by Langinfra.

| Variable | Format / Values | Default | Description |
|----------|---------------|---------|-------------|
| <a id="DO_NOT_TRACK"></a>`DO_NOT_TRACK` | Boolean | `false` | If enabled, Langinfra will not track telemetry. |
| <a id="LANGINFRA_AUTO_LOGIN"></a>`LANGINFRA_AUTO_LOGIN` | Boolean | `true` | Enable automatic login for Langinfra. Set to `false` to disable automatic login and require the login form to log into the Langinfra UI. Setting to `false` requires [`LANGINFRA_SUPERUSER`](#LANGINFRA_SUPERUSER) and [`LANGINFRA_SUPERUSER_PASSWORD`](#LANGINFRA_SUPERUSER_PASSWORD) to be set. |
| <a id="LANGINFRA_AUTO_SAVING"></a>`LANGINFRA_AUTO_SAVING` | Boolean | `true` | Enable flow auto-saving.<br/>See [`--auto-saving` option](./configuration-cli.md#run-auto-saving). |
| <a id="LANGINFRA_AUTO_SAVING_INTERVAL"></a>`LANGINFRA_AUTO_SAVING_INTERVAL` | Integer | `1000` | Set the interval for flow auto-saving in milliseconds.<br/>See [`--auto-saving-interval` option](./configuration-cli.md#run-auto-saving-interval). |
| <a id="LANGINFRA_BACKEND_ONLY"></a>`LANGINFRA_BACKEND_ONLY` | Boolean | `false` | Only run Langinfra's backend server (no frontend).<br/>See [`--backend-only` option](./configuration-cli.md#run-backend-only). |
| <a id="LANGINFRA_CACHE_TYPE"></a>`LANGINFRA_CACHE_TYPE` | `async`<br/>`redis`<br/>`memory`<br/>`disk`<br/>`critical` | `async` | Set the cache type for Langinfra.<br/>If you set the type to `redis`, then you must also set the following environment variables: [`LANGINFRA_REDIS_HOST`](#LANGINFRA_REDIS_HOST), [`LANGINFRA_REDIS_PORT`](#LANGINFRA_REDIS_PORT), [`LANGINFRA_REDIS_DB`](#LANGINFRA_REDIS_DB), and [`LANGINFRA_REDIS_CACHE_EXPIRE`](#LANGINFRA_REDIS_CACHE_EXPIRE). |
| <a id="LANGINFRA_COMPONENTS_PATH"></a>`LANGINFRA_COMPONENTS_PATH` | String | `langinfra/components` | Path to the directory containing custom components.<br/>See [`--components-path` option](./configuration-cli.md#run-components-path). |
| <a id="LANGINFRA_CONFIG_DIR"></a>`LANGINFRA_CONFIG_DIR` | String |  | Set the Langinfra configuration directory where files, logs, and the Langinfra database are stored. |
| <a id="LANGINFRA_DATABASE_URL"></a>`LANGINFRA_DATABASE_URL` | String |  | Set the database URL for Langinfra. If you don't provide one, Langinfra uses an SQLite database. |
| <a id="LANGINFRA_DEV"></a>`LANGINFRA_DEV` | Boolean | `false` | Run Langinfra in development mode (may contain bugs).<br/>See [`--dev` option](./configuration-cli.md#run-dev). |
| <a id="LANGINFRA_FALLBACK_TO_ENV_VAR"></a>`LANGINFRA_FALLBACK_TO_ENV_VAR` | Boolean | `true` | If enabled, [global variables](../Configuration/configuration-global-variables.md) set in the Langinfra UI fall back to an environment variable with the same name when Langinfra fails to retrieve the variable value. |
| <a id="LANGINFRA_FRONTEND_PATH"></a>`LANGINFRA_FRONTEND_PATH` | String | `./frontend` | Path to the frontend directory containing build files. This is for development purposes only.<br/>See [`--frontend-path` option](./configuration-cli.md#run-frontend-path). |
| <a id="LANGINFRA_HEALTH_CHECK_MAX_RETRIES"></a>`LANGINFRA_HEALTH_CHECK_MAX_RETRIES` | Integer | `5` | Set the maximum number of retries for the health check.<br/>See [`--health-check-max-retries` option](./configuration-cli.md#run-health-check-max-retries). |
| <a id="LANGINFRA_HOST"></a>`LANGINFRA_HOST` | String | `127.0.0.1` | The host on which the Langinfra server will run.<br/>See [`--host` option](./configuration-cli.md#run-host). |
| <a id="LANGINFRA_LANGCHAIN_CACHE"></a>`LANGINFRA_LANGCHAIN_CACHE` | `InMemoryCache`<br/>`SQLiteCache` | `InMemoryCache` | Type of cache to use.<br/>See [`--cache` option](./configuration-cli.md#run-cache). |
| <a id="LANGINFRA_MAX_FILE_SIZE_UPLOAD"></a>`LANGINFRA_MAX_FILE_SIZE_UPLOAD` | Integer | `100` | Set the maximum file size for the upload in megabytes.<br/>See [`--max-file-size-upload` option](./configuration-cli.md#run-max-file-size-upload). |
| <a id="LANGINFRA_LOG_ENV"></a>`LANGINFRA_LOG_ENV` | `container_json`<br/>`container_csv`<br/> | Not set | Set the log environment. Default (Not set) is json with color. If not set a format string can be provided.<br/> See [`LANGINFRA_LOG_FORMAT`](#LANGINFRA_CACHE_TYPE) |
| <a id="LANGINFRA_LOG_FILE"></a>`LANGINFRA_LOG_FILE` | String | `logs/langinfra.log` | Set the path to the log file for Langinfra.<br/>See [`--log-file` option](./configuration-cli.md#run-log-file). |
| <a id="LANGINFRA_LOG_FORMAT"></a>`LANGINFRA_LOG_FORMAT` | String | `<green>{time:YYYY-MM-DD HH:mm:ss}</green> - <level>{level: <8}</level> - {module} - <level>{message}</level>` | Configure the logformat.<br/>For example without colors: `{time:YYYY-MM-DD HH:mm:ss.SSS} {level} {file} {line} {function} {message}` <br/> If [`LANGINFRA_LOG_ENV`](#LANGINFRA_LOG_ENV) is set this configuration will be ignored.
| <a id="LANGINFRA_LOG_LEVEL"></a>`LANGINFRA_LOG_LEVEL` | `debug`<br/>`info`<br/>`warning`<br/>`error`<br/>`critical` | `critical` | Set the logging level.<br/>See [`--log-level` option](./configuration-cli.md#run-log-level). |
| <a id="LANGINFRA_MAX_FILE_SIZE_UPLOAD"></a>`LANGINFRA_MAX_FILE_SIZE_UPLOAD` | Integer | `100` | Set the maximum file size for the upload in megabytes.<br/>See [`--max-file-size-upload` option](./configuration-cli.md#run-max-file-size-upload). |
| <a id="LANGINFRA_OPEN_BROWSER"></a>`LANGINFRA_OPEN_BROWSER` | Boolean | `true` | Open the system web browser on startup.<br/> See [`--open-browser` option](./configuration-cli.md#run-open-browser). |
| <a id="LANGINFRA_PORT"></a>`LANGINFRA_PORT` | Integer | `7860` | The port on which the Langinfra server will run. The server automatically selects a free port if the specified port is in use.<br/>See [`--port` option](./configuration-cli.md#run-port). |
| <a id="LANGINFRA_PROMETHEUS_ENABLED"></a>`LANGINFRA_PROMETHEUS_ENABLED` | Boolean | `false` | Expose Prometheus metrics. |
| <a id="LANGINFRA_PROMETHEUS_PORT"></a>`LANGINFRA_PROMETHEUS_PORT` | Integer | `9090` | Set the port on which Langinfra exposes Prometheus metrics. |
| <a id="LANGINFRA_REDIS_CACHE_EXPIRE"></a>`LANGINFRA_REDIS_CACHE_EXPIRE` | Integer | `3600` | See [`LANGINFRA_CACHE_TYPE`](#LANGINFRA_CACHE_TYPE). |
| <a id="LANGINFRA_REDIS_DB"></a>`LANGINFRA_REDIS_DB` | Integer | `0` | See [`LANGINFRA_CACHE_TYPE`](#LANGINFRA_CACHE_TYPE). |
| <a id="LANGINFRA_REDIS_HOST"></a>`LANGINFRA_REDIS_HOST` | String | `localhost` | See [`LANGINFRA_CACHE_TYPE`](#LANGINFRA_CACHE_TYPE). |
| <a id="LANGINFRA_REDIS_PORT"></a>`LANGINFRA_REDIS_PORT` | String | `6379` | See [`LANGINFRA_CACHE_TYPE`](#LANGINFRA_CACHE_TYPE). |
| <a id="LANGINFRA_REMOVE_API_KEYS"></a>`LANGINFRA_REMOVE_API_KEYS` | Boolean | `false` | Remove API keys from the projects saved in the database.<br/> See [`--remove-api-keys` option](./configuration-cli.md#run-remove-api-keys). |
| <a id="LANGINFRA_SAVE_DB_IN_CONFIG_DIR"></a>`LANGINFRA_SAVE_DB_IN_CONFIG_DIR` | Boolean | `false` | Save the Langinfra database in [`LANGINFRA_CONFIG_DIR`](#LANGINFRA_CONFIG_DIR) instead of in the Langinfra package directory. Note, when this variable is set to default (`false`), the database isn't shared between different virtual environments and the database is deleted when you uninstall Langinfra. |
| <a id="LANGINFRA_STORE"></a>`LANGINFRA_STORE` | Boolean | `true` | Enable the Langinfra Store.<br/>See [`--store` option](./configuration-cli.md#run-store). |
| <a id="LANGINFRA_STORE_ENVIRONMENT_VARIABLES"></a>`LANGINFRA_STORE_ENVIRONMENT_VARIABLES` | Boolean | `true` | Store environment variables as [global variables](../Configuration/configuration-global-variables.md) in the database. |
| <a id="LANGINFRA_SUPERUSER"></a>`LANGINFRA_SUPERUSER` | String | Not set | Set the name for the superuser. Required if [`LANGINFRA_AUTO_LOGIN`](#LANGINFRA_AUTO_LOGIN) is set to `false`.<br/>See [`superuser --username` option](./configuration-cli.md#superuser-username). |
| <a id="LANGINFRA_SUPERUSER_PASSWORD"></a>`LANGINFRA_SUPERUSER_PASSWORD` | String | Not set | Set the password for the superuser. Required if [`LANGINFRA_AUTO_LOGIN`](#LANGINFRA_AUTO_LOGIN) is set to `false`.<br/>See [`superuser --password` option](./configuration-cli.md#superuser-password).|
| <a id="LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"></a>`LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT` | String | Not set | Comma-separated list of environment variables to get from the environment and store as [global variables](../Configuration/configuration-global-variables.md). |
| <a id="LANGINFRA_WORKER_TIMEOUT"></a>`LANGINFRA_WORKER_TIMEOUT` | Integer | `300` | Worker timeout in seconds.<br/>See [`--worker-timeout` option](./configuration-cli.md#run-worker-timeout). |
| <a id="LANGINFRA_WORKERS"></a>`LANGINFRA_WORKERS` | Integer | `1` | Number of worker processes.<br/>See [`--workers` option](./configuration-cli.md#run-workers). |
