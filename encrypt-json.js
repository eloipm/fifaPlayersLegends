"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var CryptoJS = require("crypto-js");
// Rutas de entrada y salida
var inputFile = './src/assets/data/players.json';
var outputFile = './src/assets/data/encrypted-players.json';
// Clave secreta para la encriptación
var secretKey = 'KEYmeliEloi';
// Leer el archivo JSON de entrada
fs.readFile(path.resolve(__dirname, inputFile), 'utf8', function (err, data) {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }
    try {
        // Convertir JSON a cadena
        var jsonData = JSON.stringify(data);
        // Encriptar la cadena usando AES
        var encryptedData = CryptoJS.AES.encrypt(jsonData, secretKey).toString();
        // Guardar los datos encriptados en el archivo de salida
        fs.writeFileSync(path.resolve(__dirname, outputFile), encryptedData, 'utf8');
        console.log('Archivo encriptado guardado en:', outputFile);
    }
    catch (error) {
        console.error('Error al encriptar y guardar el archivo:', error);
    }
});
