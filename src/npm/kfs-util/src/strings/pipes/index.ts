/**
 * Converts a value to a String
 * @decorator
 */
export function ToString(val: any): string {
    return String(val);
}

/**
 * Converts a value to a String
 * @decorator
 */
export function ToLowercase(val: string): string {
    return val.toLowerCase();
}

/**
 * Converts a value to a String
 * @decorator
 */
export function ToUppercase(val: string): string {
    return val.toUpperCase();
}

/**
 * Removes all lowercase characters from a string
 * @decorator
 */
export function OmitLowercaseChar(val: any): string {
    return val;
}

/**
 * Removes all uppercase characters from a string
 * @decorator
 */
export function OmitUppercaseChar(val: any): string {
    return val;
}

/**
 * Removes all special characters from a string
 * @decorator
 */
export function OmitSpecialChar(val: any): string {
    return val;
}
