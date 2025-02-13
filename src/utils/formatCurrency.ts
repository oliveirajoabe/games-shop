/**
 *
 * @param locales
 * @param options
 * @param price
 * @returns
 */
export default function formatCurrency(
    locales: Intl.LocalesArgument,
    options: Intl.NumberFormatOptions,
    price: number
) {
    return new Intl.NumberFormat(locales, {
        ...options,
    }).format(price / 100);
}
