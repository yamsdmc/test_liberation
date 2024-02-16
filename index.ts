export type Book = string

const standardPrice = 8;

const FIVE_PERCENT_COEFFICIENT = 0.95;
const TEN_PERCENT_COEFFICIENT = 0.90;
const TWENTY_PERCENT_COEFFICIENT = 0.80;
const TWENTYFIVE_PERCENT_COEFFICIENT = 0.75;

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

    const percentage = Object.keys(groupeByBooks).map((book: string) => {
        return decrementBookQuantities(groupeByBooks)
    }).map(getDiscount).reduce((acc, value) => acc * value)

    const discount = Math.floor(percentage * 100) / 100

    return books.length * standardPrice * discount
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

const decrementBookQuantities = (books: Record<Book, number>): number => {
    let count = 0;
    Object.keys(books).forEach(book => {
        if(books[book] > 0) {
            books[book] = books[book] - 1
            count++;
        }
    })
    return count
}
