import { isAddress } from '../../npm/kfs-api/src/user-api/schemas/address';
import {
    CompanyJSON,
    isCompany,
} from '../../npm/kfs-api/src/user-api/schemas/company';
import Address from '../address/address.model';

/**
 * Defines a new Company model
 */
export default class Company {
    name: string = null;
    contactName: string = null;
    contactPhone: string = null;
    contactEmail: string = null;
    address: Address = null;

    /**
     * @param {CompanyJSON | Company} [props] exsisting business details
     */
    constructor(props?: CompanyJSON | Company) {
        if (isCompany(props)) {
            Object.assign(this, props);

            if (isAddress(props.address)) {
                this.address = new Address(props.address);
            }
        }
    }
}
