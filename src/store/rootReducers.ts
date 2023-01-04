import {  combineReducers } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cart-slice';

export const rootReducer = combineReducers({
    cart: cartSlice
});
