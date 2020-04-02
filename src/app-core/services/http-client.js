/**
 * @class HTTPService
 * @description - sends and receives HTTP requests from back-end services
 */
export default class HTTPClient {
    /**
     * @public
     * @async
     * @function HTTPClient#GET
     * @description - sends a GET request
     * @param {String} url - service endpoint
     * @param {Object} body - http parameters
     */
    async GET(url = undefined) {
        return fetch(url);
    }

    /**
     * @public
     * @async
     * @function HTTPClient#POST
     * @description - sends a POST request
     * @param {String} url - service endpoint
     * @param {Object} body - http parameters
     */
    async POST(url = undefined, body = undefined) {
        return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    /**
     * @public
     * @async
     * @function HTTPClient#PUT
     * @description - sends a POST request
     * @param {String} url - service endpoint
     * @param {Object} body - http parameters
     */
    async PUT(url = undefined, body = undefined) {
        return fetch(url, {
            method: 'PUT',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    /**
     * @public
     * @async
     * @function HTTPClient#DELETE
     * @description - sends a DELETE request
     * @param {String} url - service endpoint
     * @param {Object} body - http parameters
     */
    async DELETE(url = undefined, body = undefined) {
        return fetch(url, {
            method: 'DELETE',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}