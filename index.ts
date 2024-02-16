export type Book = string

const standardPrice = 8;

const FIVE_PERCENT_COEFFICIENT = 0.95;
const TEN_PERCENT_COEFFICIENT = 0.90;
const TWENTY_PERCENT_COEFFICIENT = 0.80;
const TWENTYFIVE_PERCENT_COEFFICIENT = 0.75;

type BookQuantities = Record<Book, number>

const discounts: Record<number, number> = {
    2: FIVE_PERCENT_COEFFICIENT,
    3: TEN_PERCENT_COEFFICIENT,
    4: TWENTY_PERCENT_COEFFICIENT,
    5: TWENTYFIVE_PERCENT_COEFFICIENT
}

export function calculateShoppingCart(books: Book[]): number {
    if(books.length === 0) {
        return 0;
    }
    const groupeByBooks = countGroupeByBooks(books);

    return calculateDiscountedPrices(groupeByBooks).reduce(sumTotalWithDiscounts)
}

function calculateDiscountedPrices(groupeByBooks: BookQuantities) {
    const maxDiscountCycles = findMaxDiscountCycles(groupeByBooks);

    return Array.from({ length: maxDiscountCycles }, (_, index) => index)
        .map(_ => decrementBookQuantities(groupeByBooks))
        .map(calculatePriceWithDiscount)
}

function sumTotalWithDiscounts(acc: number, currentValue: number): number {
    return acc + currentValue;
}

function findMaxDiscountCycles(groupeByBooks: BookQuantities): number {
    const quantities = Object.values(groupeByBooks);
    const uniqueBooks = Object.keys(groupeByBooks).length;
    if(uniqueBooks === 1) {
        return quantities[0];
    }
    return Math.max(...quantities);
}

function calculatePriceWithDiscount(quantity: number) {
    const discount = getDiscount(quantity)
    return (quantity * standardPrice * discount)
}
function getDiscount(uniqueBookNumber: number) {
    const NO_DISCOUNT = 1;
    return discounts[uniqueBookNumber] || NO_DISCOUNT
}


function countGroupeByBooks(books: Book[]) {
    return books.reduce((acc: Record<Book, number>, book) => {
        acc[book] = (acc[book] || 0) + 1
        return acc
    }, {});
}

const decrementBookQuantities = (books: BookQuantities): number => {
    let count = 0;
    Object.keys(books).forEach((book: string) => {
        if(books[book] > 0) {
            books[book] = books[book] - 1
            count++;
        }
    })
    return count
}
