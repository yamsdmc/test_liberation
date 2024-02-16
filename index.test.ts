import { expect, describe, test } from 'vitest'
import {calculateShoppingCart} from "./index";
import {BOOK_1, BOOK_2, BOOK_3, BOOK_4, EmptyShoppingCard} from "./data";

describe('calculate shopping cart', () => {
    test('it should return a total price of 0 for an empty cart', () => {
        expect(calculateShoppingCart(EmptyShoppingCard)).toEqual(0)
    });

    test('it should return a total price of 8 EUR for a cart with a single book', () => {
        expect(calculateShoppingCart([BOOK_1])).toEqual(8)
        expect(calculateShoppingCart([BOOK_2])).toEqual(8)
    })

    test('it should not apply discounts for multiple copies of the same book', () => {
        expect(calculateShoppingCart([BOOK_1, BOOK_1])).toEqual(16)
        expect(calculateShoppingCart([BOOK_2, BOOK_2])).toEqual(16)
        expect(calculateShoppingCart([BOOK_4, BOOK_4, BOOK_4, BOOK_4])).toEqual(32)
    })
})