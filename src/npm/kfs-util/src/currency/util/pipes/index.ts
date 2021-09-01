import { CurrencyFormatter } from '../../helpers/convert-currency';
import { ISOCurrencyCodes } from '../../models/currency-codes';

// TODO - conversions for foreign currencies

/**
 * Converts a currency into another
 * @decorator
 * @async
 * @param {ISOCurrencyCodes} [fromCurrency] starting currency
 * @param {ISOCurrencyCodes} [toCurrency] currency to convert to
 * @param {number} [decimals] number of decimal places (default = 2)
 * @param {string} [locale] cultural formatting rules
 */
export async function FormatCurrency(
    value: string | number,
    fromCurrency?: ISOCurrencyCodes,
    toCurrency?: ISOCurrencyCodes,
    decimals?: number,
    locale?: string,
) {
    const formatter = new CurrencyFormatter(value);

    if (fromCurrency && toCurrency) {
        await formatter.convert(value, fromCurrency, toCurrency);
    }
    if (decimals) {
        formatter.decimals(decimals);
    }
    if (locale) {
        formatter.locale(locale);
    }

    return formatter.value;
}

/**
 * Converts a currency into US dollars
 * @decorator
 * @param {string} [fromCurrency] ISO 4217 code
 * @param {number} [decimals] number of decimal places (default = 2)
 * @param {string} [locale] cultural formatting rules
 */
export function ToDollars(
    value: string | number,
    fromCurrency?: ISOCurrencyCodes,
    decimals?: number,
    locale?: string,
) {
    let conversion = Number(value);

    if (fromCurrency || decimals || locale) {
        conversion = Number(
            FormatCurrency(
                value,
                fromCurrency,
                ISOCurrencyCodes.USD,
                decimals,
                locale,
            ),
        );
    }
    return !Number.isNaN(conversion) ? `$${conversion}` : '';
}
