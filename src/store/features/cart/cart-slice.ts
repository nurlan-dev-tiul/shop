import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cart } from "../../../data/cart.data";
import { IAddToCartPayload, ICartState, IChangeQuantity } from "./cart-types";

const initialState: ICartState = {
    items: cart
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const id = state.items.length;
            state.items.push({...action.payload, id});
        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter(
                item => item.product.id !== action.payload.id
            );
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
            const { id, type } = action.payload
            const item = state.items.find(item => item.id === id);
            if(item) {
                type === 'plus' ? item.quantity++ : item.quantity--
            }
        },
    },
    
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
