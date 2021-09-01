import Address from '../address/address.model';
import Company from '../company/company.model';
import Order from '../order/order.model';
import { isUser, UserJSON } from '../../npm/kfs-api/src/user-api/schemas/user';
import { isAddress } from '../../npm/kfs-api/src/user-api/schemas/address';
import { isCompany } from '../../npm/kfs-api/src/user-api/schemas/company';
import { PriorityQueue } from 'src/npm/kfs-util/src/data-structures';

/**
 * Defines a User object
 */
export default class User {
    id: string = '*';
    type: number = 1;

    username: string = null;

    firstName: string = null;
    lastName: string = null;
    suffix: string = null;

    email: string = null;
    phone: string = null;
    address: Address = null;

    company: Company = null;

    invoices = new PriorityQueue<Order>();

    hasEdits: boolean = false;

    /**
     * @param {UserJSON | User} [props] exsisting user details
     */
    constructor(props?: UserJSON | User) {
        if (isUser(props)) {
            Object.assign(this, props);

            const { address, company } = props;

            if (isAddress(address)) {
                this.address = new Address(address);
            }
            if (isCompany(company)) {
                this.company = new Company(company);
            }
        }
    }

    /**
     * User's full name (ex. John Smith Sr.)
     */
    get fullName() {
        const { firstName, lastName, suffix } = this;
        return `${firstName || ''} ${lastName || ''} ${suffix || ''}`;
    }
}
