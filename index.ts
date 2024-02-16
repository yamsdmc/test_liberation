export type Book = {
    title: string,
    price: string
}

export function calculateShoppingCart(books: Book[]) {
    if(!books.length) {
        return 0
    }
}