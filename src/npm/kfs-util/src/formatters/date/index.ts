type TimeUnit = number | string;
type DateType = Date | TimeUnit;

/**
 * Converts a date-time entity into a local Date object
 * @param {DateType} date date to convert
 * @returns {Date | undefined} local date object
 */
export function toLocalTime(date: DateType) {
    return date;
}

/**
 * Converts a local date object to UTC
 * @param {DateType} date date in local time zone
 * @returns {Date | undefined} UTC date
 */
export function toUTC(date: DateType) {
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
