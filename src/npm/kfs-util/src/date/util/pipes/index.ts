type DateType = Date | number | string;

/**
 * Converts a date-time entity into a local Date object
 * @decorator
 */
export function ToLocalTime(date: DateType) {
    return date;
}

/**
 * Converts a local date object to UTC
 * @decorator
 */
export function ToUTC(date: DateType) {
    if (!(date instanceof Date)) {
        // convert string/number to local date
        if (typeof date === 'string' || typeof date === 'number') {
            date = new Date(date);
        } else {
            return undefined;
        }
    }

    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    );
}
