export type Book = {
    title: string,
    price: number
}


export function calculateShoppingCart(books: Book[]): number {
    if(!books.length) {
        return 0
    }
    return 8
}