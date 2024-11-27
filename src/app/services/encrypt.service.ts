// src/app/services/encryption.service.ts
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  private secretKey: string = 'joaoribeiro43'; // Use a strong key

  constructor() {}

  // Encrypt data
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  // Decrypt data
  decrypt(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  // Set item in session storage with encryption
  setItem(key: string, value: string): void {
    const encryptedValue = this.encrypt(value);
    sessionStorage.setItem(key, encryptedValue);
  }

  // Get item from session storage with decryption
  getItem(key: string): string | null {
    const encryptedValue = sessionStorage.getItem(key);
    return encryptedValue ? this.decrypt(encryptedValue) : null;
  }

  // Remove item from session storage
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
