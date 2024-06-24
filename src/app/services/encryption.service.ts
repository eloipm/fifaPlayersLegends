import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  key = "encrypt!meliEloi";

  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }

   public decrypt = (encryptedData: string, ) => {
      return CryptoJS.AES.decrypt(encryptedData, this.key).toString(CryptoJS.enc.Utf8);
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  
}