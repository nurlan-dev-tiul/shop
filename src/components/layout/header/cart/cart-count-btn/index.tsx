import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../../../../hooks/redux-hooks';
import { changeQuantity, removeFromCart } from '../../../../../store/features/cart/cart-slice';
import { ICartItem } from '../../../../../types/cart.interface';

import styles from './count.module.scss';
import { useCart } from '../../../../../hooks/useCart';

export const CartCountBtn = ({item}: {item: ICartItem}) => {

    const dispatch = useAppDispatch();
    const { items } = useCart();

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
        step: 1,
        defaultValue: 1,
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    const qty = items.find(cartItem => cartItem.id === item.id)?.quantity;

    return (
        <HStack maxW='320px'>
            <Button 
                {...dec} 
                size='xs'
                onClick={() => dispatch(changeQuantity({id: item.id, type: 'minus'}))}
                disabled={qty === 1}
            >
                <MinusIcon />
            </Button>
            <Input 
                {...input} 
                className={styles.count_inp} 
                size='xs'
                textAlign='center'
                borderRadius='6px'
                focusBorderColor='green.100'
                cursor='default'
                width={30}
                value={qty}
                readOnly
            />
            <Button 
                {...inc} 
                size='xs' 
                onClick={() => dispatch(changeQuantity({id: item.id, type: 'plus'}))}
            >
                <AddIcon />
            </Button>

            <Button size='xs' onClick={() => dispatch(removeFromCart({id: item.id}))}>
                <DeleteIcon />
            </Button>
        </HStack>
    )
}