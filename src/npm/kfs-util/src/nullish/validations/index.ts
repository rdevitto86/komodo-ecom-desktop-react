/**
 * Determines if a value is null
 * @decorator
 */
export function IsNull(value: any) {
    return value === null;
}

/**
 * Determines if a value is undefined
 * @decorator
 */
export function IsUndefined(value: any) {
    return value === undefined;
}

/**
 * Determines if a value is null or undefined
 * @decorator
 */
export function IsNullish(value: any) {
    return value === null || value === undefined;
}

/**
 * Determines if a value is null, undefined, false, or empty
 * @decorator
 */
export function IsFalsy(value: any) {
    return !value;
}
