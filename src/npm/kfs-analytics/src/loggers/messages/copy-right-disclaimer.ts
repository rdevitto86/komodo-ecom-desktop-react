const DEFAULT = 'Test Message';

/**
 * Prints out a copy right disclaimer message to the console
 * @param {string} [message] optional legal message
 */
export const CopyRightDisclaimer = (message?: string) => {
    console.log(message || DEFAULT);
};
