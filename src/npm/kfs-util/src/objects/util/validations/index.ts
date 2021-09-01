/**
 * Determines if a value is an Object
 * @decorator
 */
export function IsObject(value: any) {
    return value.constructor === Object;
}

/**
 * Determines if a value is an empty Object
 * @decorator
 */
export function IsEmptyObject(value: any) {
    return value.constructor === Object && Object.keys(value).length;
}

/**
 * Determines if a value is a Date
 * @decorator
 */
export function IsDate(value: any) {
    return value.constructor === Date;
}

/**
 * Determines if a value is an Error
 * @decorator
 */
export function IsError(value: any) {
    return value.constructor === Error;
}

/**
 * Determines if a value is a Symbol
 * @decorator
 */
export function IsSymbol(value: any) {
    return value.constructor === Symbol;
}

/**
 * Determines if a value is a Map
 * @decorator
 */
export function IsMap(value: any) {
    return value.constructor === Map;
}

/**
 * Determines if a value is a WeakMap
 * @decorator
 */
export function IsWeakMap(value: any) {
    return value.constructor === WeakMap;
}

/**
 * Determines if a value is Enumerable
 * @decorator
 */
export function IsEnumerable(value: any) {
    return false;
}
