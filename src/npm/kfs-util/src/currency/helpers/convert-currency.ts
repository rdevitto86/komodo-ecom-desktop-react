import { ISOCurrencyCodes } from '../models/currency-codes';
import { ExchangeRateService } from '../services/exchange-rate.service';

/**
 * Assists in currency formatting and conversions
 * @example CurrencyFormatter.convert(5.99, 'USD', 'EUR').decimal(2).local('us').value;
 */
export class CurrencyFormatter {
    value: string | number = 0;

    constructor(initialValue?: string | number) {
        if (initialValue) {
            this.value = initialValue;
        }
    }

    /**
     * Converts one currency into another
     * @async
     * @param {ISOCurrencyCodes} fromCurrency starting currency
     * @param {ISOCurrencyCodes} toCurrency currency to convert to
     */
    async convert(
        value: string | number,
        fromCurrency: ISOCurrencyCodes,
        toCurrency: ISOCurrencyCodes,
    ) {
        if (
            typeof value === 'string' ||
            typeof value === 'number' ||
            fromCurrency in ISOCurrencyCodes ||
            toCurrency in ISOCurrencyCodes
        ) {
            this.value = await ExchangeRateService.convert(
                value,
                fromCurrency,
                toCurrency,
            );
        }

        return this;
    }

    /**
     * Applies decimal points to currency
     */
    decimals(decimals: number) {
        if (typeof decimals === 'number' && decimals >= 0) {
            this.value = Number(this.value).toFixed(decimals);
        }
        return this;
    }

    /**
     * Converts currency into local, cultural formatting
     */
    locale(locale: string) {
        if (typeof locale === 'string') {
            // TODO
        }
        return this;
    }

    /**
     * Converts currency value into a string
     */
    toString(): string {
        return String(this.value);
    }
}
