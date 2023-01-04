import { ICartItem } from '../../../../../types/cart.interface';
import { formatToPrice } from '../../../../../utils/format-to-price';
import { CartCountBtn } from '../cart-count-btn';
import styles from './cart-item.module.scss';

export const CartItem = ({item}: {item: ICartItem}) => {
    return (
        <div className={styles.item}>
            <div className={styles.img_wrapper}>
                <img src={item.product.images[0]} alt={item.product.name} />
            </div>
            <div>
                <div className={styles.name}>{item.product.name}</div>
                <div className={styles.price}>
                    {formatToPrice(item.product.price)}
                </div>
                <CartCountBtn item={item} />
            </div>
        </div>
    )
}