// keeps data in private scope; preventing tampering by DOM
const vault = new WeakMap<DataVault, any>();

// TODO - consider a generated token/key used to open/close safe
// TODO - figure out how to lock keys to garage-collectable values

/**
 * Stores information through scoped-limited encapsulation
 */
export default class DataVault {
    /**
     * Gets an item from the safe
     */
    get(key: any) {
        return vault.get(key);
    }

    /**
     * Adds an item to the safe
     */
    set(key: any, item: any) {
        if (
            key !== null &&
            key !== undefined &&
            item !== null &&
            item !== undefined
        ) {
            vault.set(key, item);
            return key;
        }
        return null;
    }

    /**
     * Removes an item from the safe
     */
    remove(key: any) {
        return vault.delete(key);
    }

    /**
     * Checks if an item is in the safe
     */
    has(key: any) {
        return vault.has(key);
    }
}
