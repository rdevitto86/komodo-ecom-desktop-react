/**
 * Allows for data injection and analysis of HTTP requests/respinses
 */
export default class HTTPInterceptor {
    static intercept(promise: Promise<any>) {}
    static inject(promise: Promise<any>, data: any) {}
    static mock(promise: Promise<any>, mock: any) {}
    static log(promise: Promise<any>) {}
}
