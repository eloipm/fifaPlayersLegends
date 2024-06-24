import { EncryptionService } from "../app/services/encryption.service";

const decryptData = new EncryptionService();

export const environment = {
  production: true,
  imageUrl: '../assets/images/dev.png',
  DATA_PLAYERS: decryptData.encrypt("../assets/data/players.json")
};
