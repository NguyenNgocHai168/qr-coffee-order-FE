const SP_CART_STORAGE_KEY = 'SAVE_TODO'

export default {
    get() {
        const todoJson = localStorage.getItem(SP_CART_STORAGE_KEY)
        return todoJson !== null ? JSON.parse(todoJson) : []
        // return JSON.parse(localStorage.getItem(SP_CART_STORAGE_KEY)) || []
    },
    set(cart: any) {
        localStorage.setItem(SP_CART_STORAGE_KEY, JSON.stringify(cart))
    },
}