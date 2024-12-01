// src/app/services/encryption.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  private secretKey: string = 'joaoribeiro43'; // Use a strong key

  constructor() {}

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  setItem(key: string, value: string): void {
    const encryptedValue = this.encrypt(value);
    sessionStorage.setItem(key, encryptedValue);
  }

  getItem(key: string): string | null {
    const encryptedValue = sessionStorage.getItem(key);
    return encryptedValue ? this.decrypt(encryptedValue) : null;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
