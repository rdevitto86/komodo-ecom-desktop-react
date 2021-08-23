/**
 * Validates an entered postal (zip) code
 * @decorator
 * @example
 *  - '12345'
 *  - '12345-6789'
 *  - '12345 1234'
 */
export function IsZipcode(zip: string) {
    return /^\d{5}(?:[-\s]\d{4})?$/.test(zip);
}
