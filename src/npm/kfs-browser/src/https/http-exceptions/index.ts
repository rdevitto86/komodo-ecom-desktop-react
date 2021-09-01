/**
 * Map of service exceptions
 * @readonly
 */
export const HTTPExceptions: { [key: number]: string } = Object.freeze({
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden Access',
    404: 'Not Found',
    405: 'Method Not Allowed',
    408: 'Request Timeout',
    413: 'Payload Too Large',
    415: 'Unsupported Media Type',
    500: 'Internal Server Error',
    501: 'Request Not Implemented',
    502: 'Bad Gateway',
    503: 'Request Not Completed',
    504: 'Gateway Timed Out',
});

/**
 * An exception that occurs due to an HTTP error
 * @extends Error
 */
export default class HttpException extends Error {
    /**
     * HTTP status code
     */
    code: number = null;

    /**
     * HTTP status code type (ex. client or server)
     */
    type: string = null;

    /**
     * Name of API which generated error
     */
    origin: string = null;

    /**
     * @param {number} code http status code
     * @param {string} [message] exception message
     * @param {string} [origin] name of API
     */
    constructor(code: number, message?: string, origin?: string) {
        super(message);

        Object.assign(this, { code, origin });

        if (typeof code === 'number') {
            this.name = HTTPExceptions[code] || 'HTTP Exception';

            if (code >= 400) {
                this.type = code < 500 ? 'client' : 'server';
            }
        }
    }
}
