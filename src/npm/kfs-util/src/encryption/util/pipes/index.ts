// import { EncryptionService } from '../services/encryption.service';

/**
 * Accepts a value and encrypts using HS256
 * @decorator
 */
export function Encrypt(value: any) {}

/**
 * Accepts a value and decrypts using HS256
 * @decorator
 */
export function Decrypt(token: string): any {}

/**
 * Accepts JWT token and parses field
 * @decorator
 */
export function Access(key: string, token?: string) {}

/**
 * Configures that which token property the Access function will parse from
 * @decorator
 * @see Access
 */
export function ConfigAccess(token?: string) {}
