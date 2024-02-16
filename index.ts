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

    const discount = calculateTotalDiscount(groupeByBooks);

    return books.length * standardPrice * roundDiscount(discount)
}

function roundDiscount(price: number): number {
    return Math.floor(price * 100) / 100;
}
function calculateTotalDiscount(groupeByBooks: BookQuantities) {
    return Object.keys(groupeByBooks)
        .map(_ => decrementBookQuantities(groupeByBooks))
        .map(getDiscount)
        .reduce((acc, currentValue) => acc * currentValue, 1);
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
