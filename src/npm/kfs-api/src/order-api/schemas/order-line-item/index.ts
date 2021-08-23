/**
 * Defines an abstract OrderLineItem object
 */
export interface OrderLineItemJSON {
    id: string;
}

/**
 * Checks if an item is an OrderLineItem type object
 * @param {any} obj object to reference
 * @returns {boolean} true/false
 */
export function isOrderLineItem(obj: any): obj is OrderLineItemJSON {
    return 'id' in obj;
}
