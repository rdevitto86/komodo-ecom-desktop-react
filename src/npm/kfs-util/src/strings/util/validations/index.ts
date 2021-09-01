/**
 * Determines if a value is a String or String[]
 * @decorator
 */
export function IsString(str: any) {
    return str.constructor === String || str instanceof String;
}

/**
 * Determines if a value is a empty String
 * @decorator
 */
export function IsEmptyString(value: any) {
    return value === '';
}

/**
 * Determines if a string has lower case characters
 * @decorator
 */
export function HasLowercaseChars(val: string) {
    if (typeof val === 'string') {
        return / /.test(val);
    }
    return false;
}

/**
 * Determines if a string has upper case characters
 * @decorator
 */
export function HasUppercaseChars(val: string) {
    if (typeof val === 'string') {
        return / /.test(val);
    }
    return false;
}

/**
 * Determines if a string has special characters
 * @decorator
 */
export function HasSpecialChars(val: string) {
    if (typeof val === 'string') {
        return / /.test(val);
    }
    return false;
}
