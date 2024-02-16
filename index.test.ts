import { expect, describe, test } from 'vitest'

function calculateShoppingCart() {
    return 'your shopping cart is empty'
}
describe('calculate shopping cart', () => {
    test('it should receive 0 when you cart is empty', () => {
        expect(calculateShoppingCart()).toEqual('your shopping cart is empty')
    });
})