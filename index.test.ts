import { expect, describe, test } from 'vitest'
import {calculateShoppingCart} from "./index";
import {BOOK_1, BOOK_2, EmptyShoppingCard} from "./data";

describe('calculate shopping cart', () => {
    test('it should receive 0 when you cart is empty', () => {
        expect(calculateShoppingCart(EmptyShoppingCard)).toEqual(0)
    });

    test('it should receive 8 when you cart contain 1 book', () => {
        expect(calculateShoppingCart([BOOK_1])).toEqual(8)
        expect(calculateShoppingCart([BOOK_2])).toEqual(8)
    })
})