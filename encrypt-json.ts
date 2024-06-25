import * as fs from 'fs';
import * as path from 'path';
import * as CryptoJS from 'crypto-js';

// Rutas
const inputFile = './src/assets/data/players.json';
const outputFile = './src/assets/data/encrypted-players.json';

const secretKey = 'KEYmeliEloi';

try {
  // Leer el archivo JSON de entrada
  const jsonData = fs.readFileSync(path.resolve(__dirname, inputFile), 'utf8');

  // Encriptar la cadena usando AES
  const encryptedData = CryptoJS.AES.encrypt(jsonData, secretKey).toString();

  // Guardar los datos encriptados en el archivo de salida
  fs.writeFileSync(path.resolve(__dirname, outputFile), encryptedData, 'utf8');
  console.log('Archivo encriptado guardado en:', outputFile);
} catch (error) {
  console.error('Error al encriptar y guardar el archivo:', error);
}
