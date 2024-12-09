<!-- markdownlint-disable MD030 -->

# [![Langinfra](./docs/static/img/hero.png)](https://www.langinfra.org)

<p align="center"><strong>
    Um framework visual para criar apps de agentes autônomos e RAG
</strong></p>
<p align="center" style="font-size: 12px;">
    Open-source, construído em Python, totalmente personalizável, agnóstico em relação a modelos e databases
</p>

<p align="center" style="font-size: 12px;">
    <a href="https://docs-langinfra.khulnasoft.com" style="text-decoration: underline;">Docs</a> -
    <a href="https://discord.com/invite/EqksyE2EX9" style="text-decoration: underline;">Junte-se ao nosso Discord</a> -
    <a href="https://twitter.com/khulnasoft" style="text-decoration: underline;">Siga-nos no X</a> -
    <a href="https://huggingface.co/spaces/Langinfra/Langinfra" style="text-decoration: underline;">Demonstração</a>
</p>

<p align="center">
    <a href="https://github.com/khulnasoft/langinfra">
        <img src="https://img.shields.io/github/stars/khulnasoft/langinfra">
    </a>
    <a href="https://discord.com/invite/EqksyE2EX9">
        <img src="https://img.shields.io/discord/1116803230643527710?label=Discord">
    </a>
</p>

<div align="center">
  <a href="./README.md"><img alt="README em Inglês" src="https://img.shields.io/badge/English-d9d9d9"></a>
  <a href="./README.PT.md"><img alt="README em Português" src="https://img.shields.io/badge/Português-d9d9d9"></a>
  <a href="./README.ES.md"><img alt="README em Espanhol" src="https://img.shields.io/badge/Espanhol-d9d9d9"></a>
  <a href="./README.zh_CN.md"><img alt="README em Chinês Simplificado" src="https://img.shields.io/badge/简体中文-d9d9d9"></a>
  <a href="./README.ja.md"><img alt="README em Japonês" src="https://img.shields.io/badge/日本語-d9d9d9"></a>
  <a href="./README.KR.md"><img alt="README em Coreano" src="https://img.shields.io/badge/한국어-d9d9d9"></a>
</div>

<p align="center">
  <img src="./docs/static/img/langinfra_basic_howto.gif" alt="Seu GIF" style="border: 3px solid #211C43;">
</p>

# 📝 Conteúdo

- [📝 Conteúdo](#-conteúdo)
- [📦 Introdução](#-introdução)
- [🎨 Criar Fluxos](#-criar-fluxos)
- [Deploy](#deploy)
  - [Deploy usando Google Cloud Platform](#deploy-usando-google-cloud-platform)
  - [Deploy on Railway](#deploy-on-railway)
  - [Deploy on Render](#deploy-on-render)
- [🖥️ Interface de Linha de Comando (CLI)](#️-interface-de-linha-de-comando-cli)
  - [Uso](#uso)
    - [Variáveis de Ambiente](#variáveis-de-ambiente)
- [👋 Contribuir](#-contribuir)
- [🌟 Contribuidores](#-contribuidores)
- [📄 Licença](#-licença)

# 📦 Introdução

Você pode instalar o Langinfra com pip:

```shell
# Certifique-se de ter >=Python 3.10 instalado no seu sistema.
# Instale a versão pré-lançamento (recomendada para as atualizações mais recentes)
python -m pip install langinfra --pre --force-reinstall

# ou versão estável
python -m pip install langinfra -U
```

Então, execute o Langinfra com:

```shell
python -m langinfra run
```

Você também pode visualizar o Langinfra no [HuggingFace Spaces](https://huggingface.co/spaces/Langinfra/Langinfra). [Clone o Space usando este link](https://huggingface.co/spaces/Langinfra/Langinfra?duplicate=true) para criar seu próprio workspace do Langinfra em minutos.

# 🎨 Criar Fluxos

Criar fluxos com Langinfra é fácil. Basta arrastar componentes da barra lateral para o workspace e conectá-los para começar a construir sua aplicação.

Explore editando os parâmetros do prompt, agrupando componentes e construindo seus próprios componentes personalizados (Custom Components).

Quando terminar, você pode exportar seu fluxo como um arquivo JSON.

Carregue o fluxo com:

```python
from langinfra.load import run_flow_from_json

results = run_flow_from_json("path/to/flow.json", input_value="Hello, World!")
```

# Deploy

## Deploy usando Google Cloud Platform

Siga nosso passo a passo para fazer deploy do Langinfra no Google Cloud Platform (GCP) usando o Google Cloud Shell. O guia está disponível no documento [**Langinfra on Google Cloud Platform**](https://github.com/khulnasoft/langinfra/blob/dev/docs/docs/deployment/gcp-deployment.md).

Alternativamente, clique no botão **"Open in Cloud Shell"** abaixo para iniciar o Google Cloud Shell, clonar o repositório do Langinfra e começar um **tutorial interativo** que o guiará pelo processo de configuração dos recursos necessários e deploy do Langinfra no seu projeto GCP.

[![Open on Cloud Shell](https://gstatic.com/cloudssh/images/open-btn.svg)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/khulnasoft/langinfra&working_dir=scripts/gcp&shellonly=true&tutorial=walkthroughtutorial_spot.md)

## Deploy on Railway

Use este template para implantar o Langinfra 1.0 Preview no Railway:

[![Deploy 1.0 Preview on Railway](https://railway.app/button.svg)](https://railway.app/template/UsJ1uB?referralCode=MnPSdg)

Ou este para implantar o Langinfra 0.6.x:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/JMXEWp?referralCode=MnPSdg)

## Deploy on Render

<a href="https://render.com/deploy?repo=https://github.com/khulnasoft/langinfra/tree/dev">
<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" />
</a>

# 🖥️ Interface de Linha de Comando (CLI)

O Langinfra fornece uma interface de linha de comando (CLI) para fácil gerenciamento e configuração.

## Uso

Você pode executar o Langinfra usando o seguinte comando:

```shell
langinfra run [OPTIONS]
```

Cada opção é detalhada abaixo:

- `--help`: Exibe todas as opções disponíveis.
- `--host`: Define o host para vincular o servidor. Pode ser configurado usando a variável de ambiente `LANGINFRA_HOST`. O padrão é `127.0.0.1`.
- `--workers`: Define o número de processos. Pode ser configurado usando a variável de ambiente `LANGINFRA_WORKERS`. O padrão é `1`.
- `--worker-timeout`: Define o tempo limite do worker em segundos. O padrão é `60`.
- `--port`: Define a porta para escutar. Pode ser configurado usando a variável de ambiente `LANGINFRA_PORT`. O padrão é `7860`.
- `--env-file`: Especifica o caminho para o arquivo .env contendo variáveis de ambiente. O padrão é `.env`.
- `--log-level`: Define o nível de log. Pode ser configurado usando a variável de ambiente `LANGINFRA_LOG_LEVEL`. O padrão é `critical`.
- `--components-path`: Especifica o caminho para o diretório contendo componentes personalizados. Pode ser configurado usando a variável de ambiente `LANGINFRA_COMPONENTS_PATH`. O padrão é `langinfra/components`.
- `--log-file`: Especifica o caminho para o arquivo de log. Pode ser configurado usando a variável de ambiente `LANGINFRA_LOG_FILE`. O padrão é `logs/langinfra.log`.
- `--cache`: Seleciona o tipo de cache a ser usado. As opções são `InMemoryCache` e `SQLiteCache`. Pode ser configurado usando a variável de ambiente `LANGINFRA_LANGCHAIN_CACHE`. O padrão é `SQLiteCache`.
- `--dev/--no-dev`: Alterna o modo de desenvolvimento. O padrão é `no-dev`.
- `--path`: Especifica o caminho para o diretório frontend contendo os arquivos de build. Esta opção é apenas para fins de desenvolvimento. Pode ser configurado usando a variável de ambiente `LANGINFRA_FRONTEND_PATH`.
- `--open-browser/--no-open-browser`: Alterna a opção de abrir o navegador após iniciar o servidor. Pode ser configurado usando a variável de ambiente `LANGINFRA_OPEN_BROWSER`. O padrão é `open-browser`.
- `--remove-api-keys/--no-remove-api-keys`: Alterna a opção de remover as chaves de API dos projetos salvos no banco de dados. Pode ser configurado usando a variável de ambiente `LANGINFRA_REMOVE_API_KEYS`. O padrão é `no-remove-api-keys`.
- `--install-completion [bash|zsh|fish|powershell|pwsh]`: Instala a conclusão para o shell especificado.
- `--show-completion [bash|zsh|fish|powershell|pwsh]`: Exibe a conclusão para o shell especificado, permitindo que você copie ou personalize a instalação.
- `--backend-only`: Este parâmetro, com valor padrão `False`, permite executar apenas o servidor backend sem o frontend. Também pode ser configurado usando a variável de ambiente `LANGINFRA_BACKEND_ONLY`.
- `--store`: Este parâmetro, com valor padrão `True`, ativa os recursos da loja, use `--no-store` para desativá-los. Pode ser configurado usando a variável de ambiente `LANGINFRA_STORE`.

Esses parâmetros são importantes para usuários que precisam personalizar o comportamento do Langinfra, especialmente em cenários de desenvolvimento ou deploy especializado.

### Variáveis de Ambiente

Você pode configurar muitas das opções de CLI usando variáveis de ambiente. Estas podem ser exportadas no seu sistema operacional ou adicionadas a um arquivo `.env` e carregadas usando a opção `--env-file`.

Um arquivo de exemplo `.env` chamado `.env.example` está incluído no projeto. Copie este arquivo para um novo arquivo chamado `.env` e substitua os valores de exemplo pelas suas configurações reais. Se você estiver definindo valores tanto no seu sistema operacional quanto no arquivo `.env`, as configurações do `.env` terão precedência.

# 👋 Contribuir

Aceitamos contribuições de desenvolvedores de todos os níveis para nosso projeto open-source no GitHub. Se você deseja contribuir, por favor, confira nossas [diretrizes de contribuição](./CONTRIBUTING.md) e ajude a tornar o Langinfra mais acessível.

---

[![Star History Chart](https://api.star-history.com/svg?repos=khulnasoft/langinfra&type=Timeline)](https://star-history.com/#khulnasoft/langinfra&Date)

# 🌟 Contribuidores

[![langinfra contributors](https://contrib.rocks/image?repo=khulnasoft/langinfra)](https://github.com/khulnasoft/langinfra/graphs/contributors)

# 📄 Licença

O Langinfra é lançado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
