import { useState, useRef } from 'react';
import { CartItem } from './cart-item';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { selectCart } from '../../../../store/features/cart/cart-selectors';
import { cart } from '../../../../data/cart.data';
import { formatToPrice } from '../../../../utils/format-to-price';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react';

import styles from './cart.module.scss';

export const Cart = () => {

    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const { items } = useAppSelector(selectCart);

    const total = items.reduce((acc, item) => {
        return acc + item.product.price * item.quantity
    }, 0)

    return (
        <div className={styles.wrapper}>
            <button className={styles.heading} onClick={() => setIsOpen(!isOpen)} ref={btnRef}>
                <span className={styles.badge}>{cart.length}</span>
                <span className={styles.basket_text}>Basket</span>
            </button>
            {isOpen && (
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={() => setIsOpen(false)}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>My cart</DrawerHeader>
                        <DrawerBody>
                            <div className={styles.cart}>
                                {items.length ? items.map(item => (
                                    <CartItem item={item} key={item.id} />
                                )): <div>Basket is empty</div>}
                            </div>
                        </DrawerBody>
                        <DrawerFooter justifyContent='space-between'>
                            <div className={styles.total}>
                                <span>Total:</span>
                                <span>{formatToPrice(total)}</span>
                            </div>
                            <Button variant='solid' mr={3} colorScheme='green'>
                                Checkout
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )}
        </div>
    )
}