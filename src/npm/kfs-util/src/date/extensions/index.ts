// TODO - augment global Date constructor and add these functions

/**
 * Calculates the time difference between two dates
 */
export function difference(recent: Date, previous: Date) {
    if (!(recent instanceof Date) || !(previous instanceof Date)) {
        return undefined;
    }

    const milliseconds = recent.getTime() - previous.getTime();
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = weeks / 4;
    const years = months / 12;

    // ms, sec, min, hr, day, week, month,
    return {
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
        weeks,
        months,
        years,
    };
}
