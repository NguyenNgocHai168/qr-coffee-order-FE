const SP_CART_STORAGE_KEY = 'SAVE_TODO'
const COFFEE_ORDER_STORAGE_KEY = 'SAVE_COFFEE_ORDER'

export default {
    get() {
        const todoJson = localStorage.getItem(SP_CART_STORAGE_KEY)
        return todoJson !== null ? JSON.parse(todoJson) : []
        // return JSON.parse(localStorage.getItem(SP_CART_STORAGE_KEY)) || []
    },
    set(cart: any) {
        localStorage.setItem(SP_CART_STORAGE_KEY, JSON.stringify(cart))
    },

    getCoffeeOrder() {
        let coffeeJson: string | null;
        let result;
        if (typeof window !== 'undefined') {
            coffeeJson = localStorage.getItem(COFFEE_ORDER_STORAGE_KEY);
            result = coffeeJson !== null ? JSON.parse(coffeeJson) : []
        }
        return result
    },
    setCoffeeOrder(order: any) {
        localStorage.setItem(COFFEE_ORDER_STORAGE_KEY, JSON.stringify(order))
    }
}