const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Função para extrair o frame do segundo 5 de um vídeo
function extractFrame(videoPath, thumbnailPath) {
    return new Promise((resolve, reject) => {
        const command = `ffmpeg -i "${videoPath}" -ss 00:00:05 -vframes 1 "${thumbnailPath}"`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
}

// Função principal para processar todos os vídeos na pasta
async function processVideosInFolder(folderPath) {
    try {
        // Verificar se a pasta de thumbnails existe, senão, criar
        const thumbnailsFolder = path.join(__dirname, 'thumbnails');
        if (!fs.existsSync(thumbnailsFolder)) {
            fs.mkdirSync(thumbnailsFolder);
        }

        // Listar os arquivos na pasta de entrada
        const files = fs.readdirSync(folderPath);

        // Filtrar apenas os arquivos de vídeo
        const videoFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.mp4' || ext === '.avi' || ext === '.mkv'; // Adicione mais extensões se necessário
        });

        // Processar cada vídeo
        for (let videoFile of videoFiles) {
            const videoPath = path.join(folderPath, videoFile);
            const thumbnailName = `${path.basename(videoFile, path.extname(videoFile))}.jpg`;
            const thumbnailPath = path.join(thumbnailsFolder, thumbnailName);

            console.log(`Processando vídeo: ${videoFile}`);

            // Extrair o frame do segundo 5 do vídeo
            await extractFrame(videoPath, thumbnailPath);

            console.log(`Thumbnail gerada para ${videoFile}`);
        }

        console.log('Processamento completo.');
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

// Solicitar o caminho da pasta e iniciar o processamento
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Por favor, insira o caminho da pasta de vídeos: ', folderPath => {
    processVideosInFolder(folderPath)
        .then(() => {
            readline.close();
        })
        .catch(error => {
            console.error('Ocorreu um erro ao processar os vídeos:', error);
            readline.close();
        });
});