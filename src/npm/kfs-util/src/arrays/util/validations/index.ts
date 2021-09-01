/**
 * Determines if a value is an Array
 * @decorator
 */
export function IsArray(value: any) {
    return value.constructor === Array;
}

/**
 * Determines if a value is an empty Array
 * @decorator
 */
export function IsEmptyArray(value: any) {
    return value.constructor === Array && value.length === 0;
}

/**
 * Determines if a value is a character array
 * @decorator
 */
export function IsCharArray(arr: any) {
    if (arr.constructor === Array) {
        for (let i = arr.length; i--; ) {
            const val = arr[i];
            if (val.constructor !== String || !(val instanceof String)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * Determines if a value is a number array
 * @decorator
 */
export function IsNumberArray(arr: any) {
    if (arr.constructor === Array) {
        for (let i = arr.length; i--; ) {
            const val = arr[i];
            if (val.constructor !== Number || Number.isNaN(val)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * Determines if an array is two-dimensional (2D)
 * @decorator
 */
export function Is2D(arr: Array<any>) {
    if (arr.constructor === Array) {
        for (let i = arr.length; i--; ) {
            if (arr[i].constructor !== Array) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * Determines if an array is three-dimensional (3D)
 * @decorator
 */
export function Is3D(arr: Array<any>) {
    if (arr.constructor === Array) {
        // iterate through 1st level array(s)
        for (let i = arr.length; i--; ) {
            const inner = arr[i];

            // verify 2nd level array(s)
            if (inner.constructor !== Array) {
                return false;
            }

            // iterate through 2nd level array(s)
            for (let j = inner.length; j--; ) {
                // verify each 3rd level array
                if (inner[j].constructor !== Array) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
