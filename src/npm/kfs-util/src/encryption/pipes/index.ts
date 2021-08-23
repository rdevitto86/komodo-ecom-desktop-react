/**
 * Accepts a value and encrypts using HS256
 * @decorator
 */
export function Encrypt(value: any) {}

/**
 * Accepts a value and decrypts using HS256
 * @decorator
 */
export function Decrypt(token: string): any {
    if (typeof token !== 'string') {
        return null;
    }
}

/**
 * Accepts JWT token and parses field
 * @decorator
 */
export function Access(token?: string, key?: string) {}
