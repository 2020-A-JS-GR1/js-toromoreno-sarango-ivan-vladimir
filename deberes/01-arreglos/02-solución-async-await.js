const fs = require('fs');

function rFile(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            )
        }
    )
}

function wFile(path, content) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                content,
                (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            )
        }
    )
}

async function orchestrator(path, newContent) {
    try {
        const originalContent = await rFile(path);
        console.log('El archivo contiene originalmente', originalContent);
        const finalContent = `${originalContent}\n${newContent}`;
        await wFile(path, finalContent);
        const verificationContent = await rFile(path);
        console.log('El archivo ahora contiene', verificationContent);
        return true;
    }
    catch (err) {
        console.log(err);
        throw false;
    }
}

orchestrator('./ejemplo.txt', 'Contenido')
    .then(
        response => {
            console.log('La ejecución terminó exitosamente');
        }
        ,
        err => {
            console.log('La ejecución tuvo un fallo')
        }
    )