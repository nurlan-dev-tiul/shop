import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../../../../hooks/redux-hooks';
import { changeQuantity, removeFromCart } from '../../../../../store/features/cart/cart-slice';
import { ICartItem } from '../../../../../types/cart.interface';

import styles from './count.module.scss';


export const CartCountBtn = ({item}: {item: ICartItem}) => {

    const dispatch = useAppDispatch();

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 20,
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
        <HStack maxW='320px'>
            <Button 
                {...dec} 
                size='xs'
                onClick={() => dispatch(changeQuantity({id: item.id, type: 'minus'}))}
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
                width={30}
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