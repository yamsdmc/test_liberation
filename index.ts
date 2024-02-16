export type Book = string

const standardPrice = 8;
export function calculateShoppingCart(books: Book[]): number {
    if(!books.length) {
        return 0
    }

    const uniqueBooks = new Set(books);

    if(uniqueBooks.size === 2) {
        return uniqueBooks.size * standardPrice * 0.95
    } else if(uniqueBooks.size === 3) {
        return uniqueBooks.size * standardPrice * 0.90
    } else if(uniqueBooks.size === 4) {
        return uniqueBooks.size * standardPrice * 0.80
    } else if(uniqueBooks.size === 5) {
        return uniqueBooks.size * standardPrice * 0.75
    }
    return books.length * standardPrice
}