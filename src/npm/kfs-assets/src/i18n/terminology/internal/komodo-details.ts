import { Abbreviation as CountryCode } from '../../geography/us';

// TODO - simpler to break off into smaller JSON?

/**
 * Static information related to bussiness operations
 */
export const KomodoDetails = Object.freeze({
    nameOfficial: 'Komodo Ventures, LLC.',
    nameShorthand: 'Komodo',
    nameAbbreviated: 'KFS',
    contactEmail: 'support@komodo.com',
    contactPhoneShorthand: '1234567890',
    contactPhoneFormatted: '(123) 456-7890',
    contactPhoneIntlCode: '+1',
    webAddressFull: 'https://www.komodo.com',
    webAddressShort: 'komodo.com',
    addresses: {
        primary: {
            full: '123 ABC St. Flavortown, IL 12345',
            street: '123 ABC St.',
            suite: '',
            building: '',
            city: 'Flavortown',
            state: 'IL',
            zipcode: '12345',
            country: CountryCode,
        },
    },
    management: {
        owner: {
            title: 'Owner/Operator',
            name: 'Randall DeVitto',
            age: 26,
        },
        managers: {},
        board: {},
    },
    hours: {
        start: '9am',
        end: '9pm',
        startIntl: '09:00',
        endIntl: '21:00',
        timezone: 'CST',
        utc: '',
    },
});
