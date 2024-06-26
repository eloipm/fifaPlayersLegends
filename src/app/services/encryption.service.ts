import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  key = "encrypt!meliEloi";

  public decrypt = (encryptedData: string,) => {
    return CryptoJS.AES.decrypt(encryptedData, this.key).toString(CryptoJS.enc.Utf8);
  };

}