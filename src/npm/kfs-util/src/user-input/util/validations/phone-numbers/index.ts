/**
 * Performs a regex on a phone number
 * @decorator
 * @example
 *  - '(123) 456-7890'
 *  - '(123)456-7890'
 *  - '123-456-7890'
 *  - '123.456.7890'
 *  - '1234567890'
 *  - '+01234567890'
 *  - '000-12345678'
 */
export function IsPhoneNumber(phoneNum: string) {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phoneNum);
}

/**
 * Determines if a phone number has an area code
 * @decorator
 */
export function HasAreaCode() {
    return false; // TODO
}

/**
 * Determines if a phone number has an international extension
 * @decorator
 */
export function HasInternationalCode() {
    return false; // TODO
}

/**
 * Determines if a phone number has formatting
 * @decorator
 */
export function HasFormatting() {
    return false; // TODO
}
