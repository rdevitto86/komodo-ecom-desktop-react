/**
 * Determines if a value is a Boolean
 * @decorator
 */
export function isBoolean(value: any): boolean {
    return value.constructor === Boolean;
}

/**
 * Determines if a value is true
 * @decorator
 */
export function isTrue(value: any): boolean {
    return value === true;
}

/**
 * Determines if a value is false
 * @decorator
 */
export function isFalse(value: any): boolean {
    return value === false;
}
