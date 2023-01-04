import { selectCart } from './../store/features/cart/cart-selectors';
import { useAppSelector } from './redux-hooks';

export const useCart = () => {
    const { items } = useAppSelector(selectCart);

    const total = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
    }, 0);

    return {
        items,
        total
    }

}