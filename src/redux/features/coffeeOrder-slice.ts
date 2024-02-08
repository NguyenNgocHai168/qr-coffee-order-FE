import storage from "@/util/storage";
import { createSlice } from "@reduxjs/toolkit";

type OrderCoffee = {
    id: number;
    name: string;
    done: boolean;
    image: string;
};

type OrderState = {
    list: OrderCoffee[];
    user: string;
};

const initialState: OrderState = {
    list: storage.getCoffeeOrder(),
    user: "ordercoffee",
};

export const orderCoffee = createSlice({
    name: "ordercoffee",
    initialState,
    reducers: {
        addOrderCoffee: (state, action) => {
            state.list.push(action.payload)
            storage.setCoffeeOrder(state.list)
        },
        removeOrderCoffee: (state, action) => {
            console.log("check log: ", state.list)
            
            state.list = state.list.filter((order) => order.id !== action.payload)
            storage.setCoffeeOrder(state.list)
        },
        toggleOrderCoffee: (state, action) => {
            const order = state.list.find((order) => order.id === action.payload)
            if (order) {
                order.done = !order.done
            }
        },
    },
});

export const { addOrderCoffee, removeOrderCoffee, toggleOrderCoffee } = orderCoffee.actions;
export default orderCoffee.reducer;