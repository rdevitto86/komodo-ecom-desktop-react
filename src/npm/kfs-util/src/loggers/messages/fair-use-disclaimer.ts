const DEFAULT = 'Test Message';

/**
 * Prints out a fair use disclaimer message to the console
 * @param {string} [message] optional message
 */
export const FairUseDisclaimer = (message?: string) => {
    console.log(message || DEFAULT);
};
