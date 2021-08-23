import { IsValidURL } from '../urls/validations';

export enum HTTPMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
}

/**
 * Implementation of HTTP REST operations
 */
export default class HTTP {
    /**
     * Executes a generic HTTP request
     * @static
     * @async
     * @param {Request} request http request
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async send(request: Request): Promise<Response> {
        switch (request.method) {
            case HTTPMethods.GET:
            case HTTPMethods.POST:
            case HTTPMethods.PUT:
            case HTTPMethods.DELETE:
            case HTTPMethods.HEAD:
                if (!IsValidURL(request.url)) {
                    return;
                }
                break;
            default:
                return;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    /**
     * Executes a GET request
     * @async
     * @param {Request} request http request
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async GET(request: Request): Promise<Response> {
        if (request.method !== HTTPMethods.GET || !IsValidURL(request.url)) {
            return;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    // static async GET(
    //     url: string,
    //     headers: Headers,
    //     params?: any,
    //     options?: any,
    // ): Promise<Response> {
    //     if (!IsValidURL(url)) {
    //         return;
    //     }

    //     return fetch(url, {
    //         method: 'GET',
    //         headers,
    //     });
    // }

    /**
     * Executes a POST request
     * @static
     * @async
     * @param {Request} request http request
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async POST(request: Request): Promise<Response> {
        if (request.method !== HTTPMethods.POST || !IsValidURL(request.url)) {
            // throw;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    // static async POST(
    //     url: string,
    //     headers: Headers,
    //     body: any,
    //     params?: any,
    //     options?: any,
    // ): Promise<Response> {
    //     if (!IsValidURL(url)) {
    //         return;
    //     }

    //     return fetch(url, {
    //         method: 'POST',
    //         headers,
    //         body,
    //     });
    // }

    /**
     * Executes a PUT request
     * @static
     * @async
     * @param {Request} request http request
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async PUT(request: Request): Promise<Response> {
        if (request.method !== HTTPMethods.PUT || !IsValidURL(request.url)) {
            // throw;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    // static async PUT(
    //     url: string,
    //     headers: Headers,
    //     body: any,
    //     params?: any,
    //     options?: any,
    // ): Promise<Response> {
    //     if (!IsValidURL(url)) {
    //         return;
    //     }

    //     return fetch(url, {
    //         method: 'PUT',
    //         headers,
    //         body,
    //     });
    // }

    /**
     * Executes a DELETE request
     * @static
     * @async
     * @param {string} url request url
     * @param {Params} body request body
     * @param {Params} [queryParams] request query params
     * @param {Headers} [headers] request headers
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async DELETE(request: Request): Promise<Response> {
        if (request.method !== HTTPMethods.DELETE || !IsValidURL(request.url)) {
            // throw;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    // static async DELETE(
    //     url: string,
    //     headers: Headers,
    //     body: any,
    //     params?: any,
    //     options?: any,
    // ): Promise<Response> {
    //     if (!IsValidURL(url)) {
    //         return;
    //     }

    //     return fetch(url, {
    //         method: 'DELETE',
    //         headers,
    //         body,
    //     });
    // }

    /**
     * Executes a HEAD request
     * @static
     * @async
     * @param {Request} request http request
     * @returns {Promise<Response>} response
     * @throws {ServiceException} 400 Bad Request
     */
    static async HEAD(request: Request): Promise<Response> {
        if (request.method !== HTTPMethods.HEAD || !IsValidURL(request.url)) {
            // throw;
        }

        return fetch(request);
        // .catch((error: Response) => {
        //     // throw;
        // });
    }

    // static async HEAD(
    //     url: string,
    //     headers: Headers,
    //     params?: any,
    //     options?: any,
    // ): Promise<Response> {
    //     if (!IsValidURL(url)) {
    //         return;
    //     }

    //     return fetch(url, {
    //         method: 'HEAD',
    //         headers,
    //     });
    // }
}
