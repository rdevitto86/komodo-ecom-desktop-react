import PriorityQueue from 'src/npm/kfs-util/src/data-structures/priority-queue';
import Address from '../address/address.model';
import Company from '../company/company.model';
import Order from '../order/order.model';
import { isUser, UserJSON, UserTypes } from '../../npm/kfs-api/src/user-api/schemas/user';
import { isOrder, OrderJSON } from '../../npm/kfs-api/src/order-api/schemas/order';
import { isAddress } from '../../npm/kfs-api/src/user-api/schemas/address';
import { isCompany } from '../../npm/kfs-api/src/user-api/schemas/company';

/**
 * Defines a User object
 */
export default class User {
    /**
     * Unique user identifier
     */
    id: string = '*';

    /**
     * Account type (ex. Guest, Business, etc.)
     */
    type: number = 1;

    /**
     * User's first name
     */
    firstName: string | null = null;

    /**
     * User's last name
     */
    lastName: string | null = null;

    /**
     * User's suffix (ex. Sr, Jr)
     */
    suffix: string | null = null;

    /**
     * User's email address
     */
    email: string | null = null;

    /**
     * User's phone number
     */
    phone: string | null = null;

    /**
     * User's address information
     */
    address: Address | null = null;

    /**
     * User's company information
     */
    company: Company | null = null;

    /**
     * User invoice history
     */
    invoices: PriorityQueue<Order> = new PriorityQueue<Order>();

    /**
     * Determines if the user model has changes
     */
    hasEdits: boolean = false;

    /**
     * @param {UserJSON | User} [props] exsisting user details
     */
    constructor(props?: UserJSON | User) {
        if (isUser(props)) {
            const {
                id,
                type,
                firstName,
                lastName,
                suffix,
                email,
                phone,
                address,
                company,
                invoices,
            } = props;

            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;

            if (typeof type === 'number' && UserTypes[type]) {
                this.type = type;
            }
            if (typeof suffix === 'string') {
                this.suffix = suffix;
            }
            if (typeof phone === 'string') {
                this.phone = phone;
            }
            if (isAddress(address)) {
                this.address = new Address(address);
            }
            if (isCompany(company)) {
                this.company = new Company(company);
            }
            if (invoices instanceof Array) {
                // loop through invoices and prioritze invoices
                for (const invoice of invoices) {
                    if (invoice && typeof invoice === 'object') {
                        this.addInvoice(invoice.lineItem, invoice.priority);
                    }
                }
            }
        }
    }

    /**
     * Adds an invoice to the user's history
     * @param {OrderJSON | Order} invoice order invoice
     * @param {number} [priority] invoice priority. Default is undefined.
     */
    addInvoice(invoice: OrderJSON | Order, priority?: number) {
        if (isOrder(invoice)) {
            this.invoices.enqueue(
                (invoice instanceof Order) ? invoice : new Order(invoice),
                priority,
            );
        }
    }

    /**
     * Clears the invoice list
     */
    clearInvoices() {
        this.invoices.clear();
    }

    /**
     * User's full name (ex. John Smith Sr.)
     */
    get fullName() {
        const { firstName, lastName, suffix } = this;
        return `${firstName || ''} ${lastName || ''} ${suffix || ''}`;
    }
}
