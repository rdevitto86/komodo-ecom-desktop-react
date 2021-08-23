/**
 * Performs a simple regex on an email string
 * @decorator
 * @example
 *  'anystring@anystring.anystring'
 */
export function IsEmail(email: string) {
    return /^[^\s@]+@[^\s@]+$/.test(email);
}

/**
 * Checks if an email address contains a domain
 * @decorator
 */
export function HasDomain(email: string) {
    return false; // TODO
}

/**
 * Checks if an email is registered with Google Mail
 * @decorator
 */
export function IsGmail(email: string) {
    if (typeof email === 'string') {
        return email.includes('@gmail.com');
    }
    return false;
}

/**
 * Checks if an email is registered with Microsoft Outlook
 * @decorator
 */
export function IsOutlook(email: string) {
    if (typeof email === 'string') {
        return email.includes('@outlook.com');
    }
    return false;
}

/**
 * Checks if an email is registered with Apple iCloud
 * @decorator
 */
export function IsApple(email: string) {
    if (typeof email === 'string') {
        return email.includes('@icloud.com');
    }
    return false;
}

/**
 * Checks if an email is registered with Yahoo Mail
 * @decorator
 */
export function IsYahoo(email: string) {
    if (typeof email === 'string') {
        return email.includes('@yahoo.com');
    }
    return false;
}

/**
 * Checks if an email is registered with Zoho Mail
 * @decorator
 */
export function IsZoho(email: string) {
    if (typeof email === 'string') {
        return email.includes('@zohomail.com');
    }
    return false;
}

/**
 * Checks if an email is registered with AOL Mail
 * @decorator
 */
export function IsAOL(email: string) {
    if (typeof email === 'string') {
        return email.includes('@aol.com');
    }
    return false;
}
