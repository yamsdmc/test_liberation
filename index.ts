export type Book = string

const standardPrice = 8;

const FIVE_PERCENT = 0.95
const TEN_PERCENT = 0.90
const TWENTY_PERCENT = 0.80
const TWENTYFIVE_PERCENT = 0.75

const discounts: Record<number, number> = {
    2: FIVE_PERCENT,
    3: TEN_PERCENT,
    4: TWENTY_PERCENT,
    5: TWENTYFIVE_PERCENT
}

export function calculateShoppingCart(books: Book[]): number {
    if(!books.length) {
        return 0
    }

    const uniqueBooks = getUniqueBooksCount(books)
    const discount = getDiscount(uniqueBooks)
    return books.length * standardPrice * discount
}

function getDiscount(uniqueBookNumber: number) {
    return discounts[uniqueBookNumber] || 1
}

function getUniqueBooksCount(books: Book[]): number {
    return new Set(books).size
}

