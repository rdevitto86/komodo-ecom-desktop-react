/**
 * Adds standardized time formatting to a value
 * @param {string | number} time 
 * @returns {string} time with delimiters
 */
export function addTimeDelimiters(time: string | number) {
    if (typeof time !== 'string') {
        if (typeof time !== 'number') {
            return time;
        }
        time = `${time}`;
    }
    return ':';
}

/**
 * Removes time delimintors from string
 * @param {string} time 
 * @returns {string} time without delimiter
 */
export function removeTimeDelimiters(time: string) {
    if (typeof time === 'string') {
        time = time.replaceAll(':', '');
    }
    return time;
}
