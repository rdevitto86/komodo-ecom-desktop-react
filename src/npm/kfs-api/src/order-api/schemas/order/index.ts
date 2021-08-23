import { OrderLineItemJSON } from '../order-line-item';

/**
 * Defines an abstract Order object
 */
export interface OrderJSON {
    id: string;
    status: {
        code: InvoiceStatusCode;
        title: InvoiceStatusTitle;
    };
    lineItems: OrderLineItemJSON[];
    total: number;
    subTotal: number;
    salesTax?: number;
    salesTaxRate?: number;
    shippingCost?: number;
    shippingRate?: number;
    fees?: number;
    serviceDates?: { [key: string]: string[] };
    enablePromotions?: boolean;
}

/**
 * Checks if an item is an OrderJSON type object
 * @param {any} obj object to reference
 * @returns {boolean} true/false
 */
export function isOrder(obj: any): obj is OrderJSON {
    return (
        'id' in obj &&
        'status' in obj &&
        'lineItems' in obj &&
        'total' in obj &&
        'subTotal' in obj
    );
}

export type InvoiceStatusCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type InvoiceStatusTitle =
    | 'OPEN'
    | 'PAYMENT_HOLD'
    | 'INFO_HOLD'
    | 'PAID'
    | 'IN_PROGRESS'
    | 'FUFILLED'
    | 'SCHEDULED'
    | 'DELAYED'
    | 'REFUNDED';

export enum InvoiceStatuses {
    OPEN = 1,
    PAYMENT_HOLD = 2,
    INFO_HOLD = 3,
    PAID = 4,
    IN_PROGRESS = 5,
    FUFILLED = 6,
    SCHEDULED = 7,
    DELAYED = 8,
    REFUNDED = 9,
}
