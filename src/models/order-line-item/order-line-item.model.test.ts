import OrderLineItem from './order-line-item.model';

describe('OrderLineItem Model tests', () => {
    const fullMock = new OrderLineItem({
        id: '2',
        // details,
        // quantity,
        // basePrice,
        // netCost,
    });

    const partialMock = new OrderLineItem({
        id: '1',
        // details,
        // quantity,
        // basePrice,
        // netCost,
    });

    test('model with all properties', () => {
        const {
            id,
            // details,
            // quantity,
            // basePrice,
            // netCost,
        } = fullMock;

        expect(id).toBe(null);
        // expect(details).toBe(null);
        // expect(quantity).toBe(null);
        // expect(basePrice).toBe(null);
        // expect(netCost).toBe(null);
    });

    test('model with partial properties', () => {
        const {
            id,
            // details,
            // quantity,
            // basePrice,
            // netCost,
        } = partialMock;

        expect(id).toBe(null);
        // expect(details).toBe(null);
        // expect(quantity).toBe(null);
        // expect(basePrice).toBe(null);
        // expect(netCost).toBe(null);
    });

    test('model with no params', () => {
        const {
            id,
            // details,
            // quantity,
            // basePrice,
            // netCost,
        } = new OrderLineItem();

        expect(id).toBe(null);
        // expect(details).toBe(null);
        // expect(quantity).toBe(null);
        // expect(basePrice).toBe(null);
        // expect(netCost).toBe(null);
    });

    test('mapping one OrderLineItem model to another', () => {
        const {
            id,
            // details,
            // quantity,
            // basePrice,
            // netCost,
        } = new OrderLineItem(fullMock);

        expect(id).toBe(null);
        // expect(details).toBe(null);
        // expect(quantity).toBe(null);
        // expect(basePrice).toBe(null);
        // expect(netCost).toBe(null);
    });
});
