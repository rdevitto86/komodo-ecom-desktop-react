// keeps data in private scope; preventing tampering by DOM
const impl = new WeakMap<any, any>();

// TODO - consider a generated token/key used to open/close safe

/**
 * Protects information through encapsulation
 */
export default class DataSafe {
    /**
     * Gets an item from the safe
     * @param {any} key 
     */
    get(key: any) {
        impl.get(key);
    }

    /**
     * Adds an item to the safe
     * @param {any} key 
     * @param item 
     */
    set(key: any, item: any) {
        impl.set(key, item);
    }

    /**
     * Removes an item from the safe
     * @param {any} key 
     */
    remove(key: any) {
        impl.delete(key);
    }

    /**
     * Checks if an item is in the safe
     * @param {any} key 
     * @returns {boolean} true/false
     */
    has(key: any) {
        return impl.has(key);
    }
}
