import Address from '../address/address.model';
import Company from './company.model';

describe('Company tests', () => {
    const mockAddress = new Address();

    const fullMock = new Company({
        name: 'Business 123',
        contactName: 'Sam Adams',
        contactPhone: '1234567890',
        contactEmail: 'sam.adams@fakemail.com',
        address: mockAddress,
    });

    const partialMock = new Company({
        name: 'Business 456',
        contactName: 'Ben Hana',
        contactEmail: 'ben.hana@fakemail.com',
        address: mockAddress,
    });

    test('model with all properties', () => {
        const { name, contactName, contactPhone, contactEmail, address } = fullMock;

        expect(name).toBe('Business 123');
        expect(contactName).toBe('Sam Adams');
        expect(contactPhone).toBe('1234567890');
        expect(contactEmail).toBe('sam.adams@fakemail.com');
        expect(address).toBe(mockAddress);
    });

    test('model with partial properties', () => {
        const { name, contactName, contactPhone, contactEmail, address } =
            partialMock;

        expect(name).toBe('Business 456');
        expect(contactName).toBe('Ben Hana');
        expect(contactPhone).toBe(null);
        expect(contactEmail).toBe('sam.adams@fakemail.com');
        expect(address).toBe(mockAddress);
    });

    test('model with no params', () => {
        const { name, contactName, contactPhone, contactEmail, address } =
            new Company();

        expect(name).toBe(null);
        expect(contactName).toBe(null);
        expect(contactPhone).toBe(null);
        expect(contactEmail).toBe(null);
        expect(address).toBe(null);
    });

    test('mapping one Company model to another', () => {
        const { name, contactName, contactPhone, contactEmail, address } =
            new Company(fullMock);

        expect(name).toBe('Business 123');
        expect(contactName).toBe('Sam Adams');
        expect(contactPhone).toBe('1234567890');
        expect(contactEmail).toBe('sam.adams@fakemail.com');
        expect(address).toBe(mockAddress);
    });
});
