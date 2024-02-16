export type Book = string


export function calculateShoppingCart(books: Book[]): number {
    if(!books.length) {
        return 0
    }
    return 8
}