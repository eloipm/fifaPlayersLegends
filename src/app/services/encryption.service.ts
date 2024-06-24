import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private key = 'KEYmeliEloi'; 

  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }

  public decrypt(passwordToDecrypt: string): string {
    const bytes = CryptoJS.AES.decrypt(passwordToDecrypt, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  
}