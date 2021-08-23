/**
 * Determines if a value is a Function
 * @decorator
 */
export function IsFunction(value: any) {
    return value.constructor === Function;
}

/**
 * Determines if a function is anonymous or named
 * @decorator
 */
export function IsAnonymous(func: Function) {
    if (typeof func !== 'function') {
        return false;
    }
    return func.name !== '';
}

/**
 * Determines if a function has parameters
 * @decorator
 */
export function HasArgs(func: Function) {
    if (typeof func !== 'function') {
        return false;
    }
    return !!func.length;
}
