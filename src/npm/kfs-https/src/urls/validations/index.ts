/**
 * Validates a URL string for correct syntax
 * @decorator
 */
export function IsValidURL(url: URL | string) {
    if (typeof url !== 'string') {
        if (url instanceof URL) {
            url = url.toString();
        } else {
            return false;
        }
    }
    return / /.test(url);
}

/**
 * Checks if a URL object contains a specific query param.
 * Recommended for longer URLs.
 * @decorator
 */
export function HasParam(url: URL, key: string) {
    if (url instanceof URL && typeof key === 'string') {
        return url.searchParams.get(key);
    }
    return false;
}

/**
 * Checks if a URL object contains specific params.
 * Recommended for longer URLs.
 * @decorator
 */
export function HasParams(url: URL, keys: string[]) {
    if (url instanceof URL && keys instanceof Array) {
        const params = url.searchParams;
        for (let i = keys.length; i--; ) {
            if (!params.get(keys[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * Checks if a URL object contains a the HTTPS protocol
 * @decorator
 */
export function HasHTTPS(url: URL | string) {
    if (typeof url !== 'string') {
        if (url instanceof URL) {
            url = url.protocol;
        } else {
            return false;
        }
    }
    return url.includes('https');
}
