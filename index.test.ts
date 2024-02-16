import { expect, describe, test } from 'vitest'
import {calculateShoppingCart} from "./index";

describe('calculate shopping cart', () => {
    test('it should receive 0 when you cart is empty', () => {
        expect(calculateShoppingCart([])).toEqual(0)
    });
})