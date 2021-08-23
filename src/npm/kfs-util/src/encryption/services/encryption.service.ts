/**
 * Facilitates the encryption and decryption process
 */
export class EncryptionService {
    private static readonly PRIVATE_KEY = process.env.KEY;

    static encrypt(value: any) {}
    static decrypt(token: string) {}
    static isValidToken(token: string) {}
}
