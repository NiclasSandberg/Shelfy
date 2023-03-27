import { IProduct } from "../interfaces";

export const expiryDateToText = (product: IProduct): { long: string, short: string, progress: number } => {
    const today = new Date();

    const expiryDate = new Date(product.expiryDate);
    const productOpenedAt = new Date(product.dateOpened);

    const shelflifeLeftFromTodayInMs = expiryDate.getTime() - today.getTime();
    const fullShelflifeInMs =
        expiryDate.getTime() - productOpenedAt.getTime() || 1;
    const percentageToShow =
        100 - shelflifeLeftFromTodayInMs / (fullShelflifeInMs / 100);

    const daysUntilExpireFromToday = Math.floor(
        shelflifeLeftFromTodayInMs / (1000 * 60 * 60 * 24)
    );
    const months = Math.floor(daysUntilExpireFromToday / 30);
    const daysAfterMonthsSubstraction = daysUntilExpireFromToday % 30;

    const progress =
        percentageToShow > 95 && percentageToShow < 100
            ? 92
            : Math.min(percentageToShow, 100);


    return {
        long: daysUntilExpireFromToday < 30
            ? "still good for " + daysUntilExpireFromToday + " days"
            : "still good for " +
            months +
            " months and " +
            daysAfterMonthsSubstraction +
            " days",
        short: daysUntilExpireFromToday < 30
            ? daysUntilExpireFromToday + " D"
            : months + " M",
        progress: progress
    };
}