import {
    AddressJSON,
    isAddress,
} from '../../npm/kfs-api/src/user-api/schemas/address';

/**
 * Defines a new Address model
 */
export default class Address {
    line1: string = null;
    line2: string = null;
    // line3: string = null;
    city: string = null;
    state: string = null;
    county: string = null;
    zipcode: string = null;
    country: string = null;

    /**
     * @param {AddressJSON | Address} [props] exsisting address details
     */
    constructor(props?: AddressJSON | Address) {
        if (isAddress(props)) {
            Object.assign(this, props);
        }
    }

    /**
     * Prints full, formatted address
     * @returns {string} address
     * @example 'One Apple Park Way, Cupertino, CA 95014 US'
     */
    print() {
        const {
            line1,
            line2,
            // line3,
            city,
            state,
            county,
            zipcode,
            country,
        } = this;

        const streetAddress = `${line1 || ''}${line2 ? ` ${line2}` : ''}`;
        const regionalAddress = `, ${state || ''}${county ? `, ${county}` : ''}`;

        return `${streetAddress}, ${city || ''}, ${regionalAddress} ${
            zipcode || ''
        } ${country || ''}`;
    }
}
