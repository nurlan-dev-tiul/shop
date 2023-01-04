import { ICartItem } from "../../../types/cart.interface";

//! Типизируем стейт
export interface ICartState {
    items: ICartItem[]
}

//! Мы наследуемся от интерфейса ICartItem, но убираем id используя Omit
export interface IAddToCartPayload extends Omit<ICartItem, 'id'>{}

//! Мы наследуемся от интерфейса ICartItem, но берем только id используя Pick
export interface IChangeQuantity extends Pick<ICartItem, 'id'>{
    type: 'plus' | 'minus'
}