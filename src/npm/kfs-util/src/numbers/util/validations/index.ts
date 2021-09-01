/**
 * Determines if a value is a Number
 * @decorator
 */
export function IsNumber(value: any) {
    return Number.isFinite(value);
}

/**
 * Determines if a value is not a number
 * @decorator
 */
export function IsNaN(value: any) {
    return value === NaN;
}

/**
 * Determines if a value is an Integer
 * @decorator
 */
export function IsInt(value: any) {
    return Number.isInteger(value);
}

/**
 * Determines if a value is a Float (decimal)
 * @decorator
 */
export function IsFloat(value: any) {
    return !Number.isInteger(value);
}

/**
 * Determines if a value is a BigInt
 * @decorator
 */
export function IsBigInt(value: any) {
    return value.constructor === BigInt;
}

/**
 * Determines if a value is infinite
 * @decorator
 */
export function isInfinite(value: any) {
    return value === Infinity;
}
