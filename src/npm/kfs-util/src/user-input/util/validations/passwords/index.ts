export const PasswordStandards = Object.freeze({
    MIN_LENGTH: 7,
    MAX_LENGTH: 25,
    ALLOW_LOWER: true,
    ALLOW_UPPER: true,
    ALLOW_SPECIAL: true,
    NEED_LOWER: true,
    NEED_UPPER: true,
    NEED_SPECIAL: false,
});

/**
 * Determines if a password meets specific criteria
 * @decorator
 * @example Abc123!?
 */
export function IsPassword(pwd: string) {
    return / /.test(pwd);
}

/**
 * Determines if a password is too short
 * @decorator
 */
export function IsPasswordShort(pwd: string) {
    if (typeof pwd === 'string') {
        return pwd.length < PasswordStandards.MIN_LENGTH;
    }
    return true;
}

/**
 * Determines if a password is too long
 * @decorator
 */
export function IsPasswordLong(pwd: string) {
    if (typeof pwd === 'string') {
        return pwd.length > PasswordStandards.MAX_LENGTH;
    }
    return true;
}

/**
 * Determines if a password has lower case lettering (ex. abcde...)
 * @decorator
 */
export function HasLowercaseChars(pwd: string) {
    if (typeof pwd === 'string') {
        return / /.test(pwd);
    }
    return false;
}

/**
 * Determines if a password has upper case lettering (ex. ABCDE...)
 * @decorator
 */
export function HasUppercaseChars(pwd: string) {
    if (typeof pwd === 'string') {
        return / /.test(pwd);
    }
    return false;
}

/**
 * Determines if a password has special characters (ex. !@?*.)
 * @decorator
 */
export function HasSpecialChars(pwd: string) {
    if (typeof pwd === 'string') {
        return / /.test(pwd);
    }
    return false;
}
