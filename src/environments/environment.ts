import { EncryptionService } from "../app/services/encryption.service";

const decryptData = new EncryptionService();

export const environment = {
  production: false,
  imageUrl: '../assets/images/pro.png',
  DATA_PLAYERS: decryptData.encrypt("../assets/data/players.json")
};
