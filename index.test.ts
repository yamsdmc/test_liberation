import { expect, describe, test } from 'vitest'
import {calculateShoppingCart} from "./index";
import {BOOK_1, BOOK_2, BOOK_3, BOOK_4, BOOK_5, EmptyShoppingCard} from "./data";

describe('calculate shopping cart', () => {
    test('the amount cart must be 0€ when it empty', () => {
        expect(calculateShoppingCart(EmptyShoppingCard)).toEqual(0)
    });

    test('the amount cart must be 8€ when it contain one book', () => {
        expect(calculateShoppingCart([BOOK_1])).toEqual(8)
        expect(calculateShoppingCart([BOOK_2])).toEqual(8)
    })

    test('the cart should not apply discounts for multiple copies of the same book', () => {
        expect(calculateShoppingCart([BOOK_1, BOOK_1])).toEqual(16)
        expect(calculateShoppingCart([BOOK_2, BOOK_2])).toEqual(16)
        expect(calculateShoppingCart([BOOK_4, BOOK_4, BOOK_4, BOOK_4])).toEqual(32)
    })

    test('the cart must be discounted by 5% when it contains 2 different books', () => {
        expect(calculateShoppingCart([BOOK_4, BOOK_2])).toEqual(15.2);
        expect(calculateShoppingCart([BOOK_1, BOOK_5])).toEqual(15.2);
    })

    test('The cart must be discounted by 10% when it contains 3 different books.', () => {
        expect(calculateShoppingCart([BOOK_4, BOOK_2, BOOK_1])).toEqual(21.6);
        expect(calculateShoppingCart([BOOK_2, BOOK_3, BOOK_5])).toEqual(21.6);
    })
    test('The cart must be discounted by 20% when it contains 4 different books.', () => {
        expect(calculateShoppingCart([BOOK_4, BOOK_2, BOOK_1, BOOK_3])).toEqual(25.6);
    })
    test('The cart must be discounted by 25% when it contains 5 different books', () => {
        expect(calculateShoppingCart([BOOK_4, BOOK_2, BOOK_1, BOOK_3, BOOK_5])).toEqual(30);
    })

    test('The amount cart must be 30€ when it contains 2 pairs of 2 similar books and 1 different book.', () => {
        expect(calculateShoppingCart([BOOK_1, BOOK_1, BOOK_3, BOOK_3, BOOK_5])).toEqual(28.8);
    })

})