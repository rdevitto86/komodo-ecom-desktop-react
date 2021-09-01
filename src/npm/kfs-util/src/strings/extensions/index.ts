// TODO - augment global String constructor and add these functions

/**
 * Reverses a string
 * @example
 *  reverse('some string') => 'gnirts emos'
 */
export function reverse(s: string) {
    if (typeof s !== 'string') {
        return s;
    }
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

/**
 * Adds elipses to the a string
 * @example
 *  elipses('some string') => 'some string...'
 */
export function elipses(s: string) {
    if (typeof s !== 'string') {
        return s;
    }
    return `${s.slice(0, s.length)}...`;
}

/**
 * Truncates a string to a desired length
 * @example
 *  truncate('test string', 4) => 'test'
 */
export function truncate(s: string, len: number) {
    if (typeof s !== 'string') {
        return s;
    }
    if (typeof len !== 'number') {
        len = s.length;
    }
    return s.slice(0, len);
}

/**
 * Removes all whitespace from a string
 */
export function trimAll(s: string) {
    if (typeof s !== 'string') {
        return s;
    }
    return s.replaceAll(/\s/g, '');
}

/**
 * Converts a number into a percentage
 */
export function toPercent(s: string | number) {
    if (typeof s !== 'string' || typeof s !== 'number') {
        return '';
    }
    const conversion = Number(s);
    return !Number.isNaN(conversion) ? `${Number(conversion)}%` : '';
}
