import {
    OrderLineItemJSON,
    isOrderLineItem,
} from '../../npm/kfs-api/src/order-api/schemas/order-line-item';

/**
 * Defines a new OrderLineItem model
 */
export default class OrderLineItem {
    id: string | null = null;

    /**
     * @param {OrderLineItemJSON | OrderLineItem} props line item details object
     */
    constructor(props?: OrderLineItemJSON | OrderLineItem) {
        if (isOrderLineItem(props)) {
            Object.assign(this, props);
        }
    }
}
