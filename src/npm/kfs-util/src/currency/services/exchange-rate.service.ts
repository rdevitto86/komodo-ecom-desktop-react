import { ISOCurrencyCodes } from '../models/currency-codes';

/**
 * Fetches exchange rates for currencies
 */
export class ExchangeRateService {
    private static readonly URL: string = process.env.EXCHANGE_RATE_URL;

    static async convert(
        value: string | number,
        fromCurrency: ISOCurrencyCodes,
        toCurrency: ISOCurrencyCodes,
    ): Promise<number> {
        // TODO
        return (await fetch(this.URL)).json();
    }
}
