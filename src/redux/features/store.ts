import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todo-slice"
import orderCoffeeReducer from "./coffeeOrder-slice"

export const store = configureStore({
    reducer: {
        todoReducer,
        orderCoffeeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch