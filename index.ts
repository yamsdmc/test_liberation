export type Book = string

const standardPrice = 8;
export function calculateShoppingCart(books: Book[]): number {
    if(!books.length) {
        return 0
    }

    const uniqueBooks = new Set(books);

    if(uniqueBooks.size === 2) {
        return uniqueBooks.size * standardPrice * 0.95
    }
    return books.length * standardPrice
}