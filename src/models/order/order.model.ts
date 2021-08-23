import OrderLineItem from '../order-line-item/order-line-item.model';
import {
    InvoiceStatusCode,
    isOrder,
    OrderJSON,
} from '../../npm/kfs-api/src/order-api/schemas/order';
import { CatalogItem } from 'src/npm/kfs-api/src/catalog-api/schemas/catalog-item';

/**
 * Defines a new Order model
 */
export default class Order {
    id: string = '*';

    status: string = null;
    statusCode: InvoiceStatusCode = 1;

    lineItems = new Map<string, OrderLineItem>();
    lineItemCount: number = 0;

    total: number = 0;
    subTotal: number = 0;

    salesTaxTotal: number = 0;
    salesTaxRate: number = 0;

    laborTotal: number = 0;
    shippingTotal: number = 0;

    fees: any[] = [];
    feeTotal: number = 0;
    feeCount: number = 0;

    enablePromotions: boolean = false;
    discountTotal: number = 0;
    promotions: Map<string, any> = new Map();

    technicians: any[] = [];
    serviceDates = new Map<string, string[]>();

    /**
     * @param {OrderJSON | Order} [props] invoice details object
     */
    constructor(props?: OrderJSON | Order) {
        if (isOrder(props)) {
            Object.assign(this, props);

            const { lineItems } = props;

            if (lineItems instanceof Array) {
                for (const item of lineItems) {
                    this.lineItems.set(item.id, new OrderLineItem(item));
                }
            }
        }
    }

    /**
     * Adds a new line item to the invoice
     * @param {CatalogItem} item new invoice line item
     * @param {number} [quantity] number if items added
     */
    addLineItem(item: CatalogItem, quantity?: number) {
        // TODO
    }

    /**
     * Removes a line item from invoice
     * @param {string} id line item identifier
     */
    removeLineItem(id: string) {
        if (this.lineItems.get(id)) {
            this.lineItems.delete(id);
            this.recalculate();
        }
    }

    /**
     * Increases line item quantity
     * @param {string} id line item identifier
     * @param {number} [quantity] number if items added
     */
    incramentLineItem(id: string, quantity?: number) {
        if (this.lineItems.get(id)) {
            this.recalculate();
        }
    }

    /**
     * Decreases line item quantity
     * @param {string} id line item identifier
     * @param {number} [quantity] number if items removed
     */
    decramentLineItem(id: string, quantity?: number) {
        if (this.lineItems.get(id)) {
            this.recalculate();
        }
    }

    /**
     * Checks if the order has a given line item
     * @param {string} id line item identifier
     */
    hasItem(id: string) {
        return this.lineItems.has(id);
    }

    /**
     * Resets invoice
     */
    clearInvoice() {}

    /**
     *
     */
    private recalculate() {}
}
