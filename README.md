# Gerador de Thumbnails de Vídeos

Este é um pequeno aplicativo Node.js que processa vídeos em uma pasta específica e gera thumbnails para cada vídeo.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Clone ou faça o download deste repositório para o seu computador.

## Configuração

Antes de executar o aplicativo, você precisa instalar as dependências necessárias. No terminal, navegue até o diretório raiz do projeto e execute o seguinte comando:

npm install


Isso instalará todas as dependências listadas no arquivo `package.json`.

## Execução

Após instalar as dependências, você pode executar o aplicativo da seguinte maneira:

1. Abra o terminal e navegue até o diretório raiz do projeto.
2. Execute o seguinte comando:

node extract-thumbnails.js

3. O aplicativo solicitará o caminho da pasta de vídeos. Insira o caminho e pressione Enter.
4. O aplicativo processará os vídeos na pasta especificada e gerará thumbnails para cada um deles.

## Notas

- Certifique-se de que o FFmpeg está instalado em seu sistema e acessível no PATH do sistema. O aplicativo usa o FFmpeg para processar os vídeos e extrair os frames.
- Os vídeos devem estar em um dos seguintes formatos: .mp4, .avi, .mkv. Você pode adicionar mais extensões de vídeo ao código, se necessário.
