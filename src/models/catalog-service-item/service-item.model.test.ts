import CatalogItem from '../catalog-item/catalog-item.model';
import CatalogProductItem from '../catalog-product-item/product-item.model';
import CatalogServiceItem from './service-item.model';

describe('CatalogProductItem model tests', () => {
    const mockItem = new CatalogItem({
        catalogID: '1234567890',
        categoryID: 'CI-001',
        classifcation: 'TEST',
        price: 99999.99,
        title: 'Some Title',
        description: 'Some Description',
    });

    const mockProducts: CatalogProductItem[] = [
        // TODO
    ];

    const mockServiceDate = new Date();

    const fullMock = new CatalogServiceItem({
        ...mockItem,
        products: mockProducts,
        serviceDate: mockServiceDate,
        estimateMinutes: 30,
        estimateHours: 1,
        estimateDays: 0,
        technicianName: 'John Smith',
        partsCost: 26.78,
        laborCost: 30,
    });

    const partialMock = new CatalogServiceItem({
        ...mockItem,
        products: [],
        estimateMinutes: 0,
        estimateHours: 2,
        estimateDays: 0,
        partsCost: 0,
        laborCost: 55.45,
    });

    // TODO - mocks/stubs/spies

    test('model with all properties', () => {
        const {
            products,
            serviceDate,
            estimateMinutes,
            estimateHours,
            estimateDays,
            technicianName,
            partsCost,
            laborCost,
        } = fullMock;

        expect(products).toBe(mockProducts);
        expect(serviceDate).toBe(mockServiceDate);
        expect(estimateMinutes).toBe(30);
        expect(estimateHours).toBe(1);
        expect(estimateDays).toBe(0);
        expect(technicianName).toBe('John Smith');
        expect(partsCost).toBe(26.78);
        expect(laborCost).toBe(30);
    });

    test('model with partial properties', () => {
        const {
            products,
            serviceDate,
            estimateMinutes,
            estimateHours,
            estimateDays,
            technicianName,
            partsCost,
            laborCost,
        } = partialMock;

        expect(products.length).toBe(0);
        expect(serviceDate).toBe(null);
        expect(estimateMinutes).toBe(0);
        expect(estimateHours).toBe(2);
        expect(estimateDays).toBe(0);
        expect(technicianName).toBe(null);
        expect(partsCost).toBe(0);
        expect(laborCost).toBe(55.45);
    });

    test('properties inherited from CatalogItem', () => {
        const {
            catalogID,
            categoryID,
            classifcation,
            price,
            title,
            description,
        } = fullMock;

        expect(catalogID).toBe('1234567890');
        expect(categoryID).toBe('CI-001');
        expect(classifcation).toBe('TEST');
        expect(price).toBe(99999.99);
        expect(title).toBe('Some Title');
        expect(description).toBe('Some Description');
    });

    test('model with no params', () => {
        const {
            products,
            serviceDate,
            estimateMinutes,
            estimateHours,
            estimateDays,
            technicianName,
            partsCost,
            laborCost,
        } = new CatalogServiceItem();

        expect(products.length).toBe(0);
        expect(serviceDate).toBe(null);
        expect(estimateMinutes).toBe(null);
        expect(estimateHours).toBe(null);
        expect(estimateDays).toBe(null);
        expect(technicianName).toBe(null);
        expect(partsCost).toBe(null);
        expect(laborCost).toBe(null);
    });

    test('mapping one CatalogServiceItem model to another', () => {
        const {
            products,
            serviceDate,
            estimateMinutes,
            estimateHours,
            estimateDays,
            technicianName,
            partsCost,
            laborCost,
        } = new CatalogServiceItem(fullMock);

        expect(products).toBe(mockProducts);
        expect(serviceDate).toBe(mockServiceDate);
        expect(estimateMinutes).toBe(30);
        expect(estimateHours).toBe(1);
        expect(estimateDays).toBe(0);
        expect(technicianName).toBe('John Smith');
        expect(partsCost).toBe(26.78);
        expect(laborCost).toBe(30);
    });
});
