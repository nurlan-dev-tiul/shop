import { useState } from 'react';
import { Input, InputGroup, InputRightElement  } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './search.module.scss';

type Props = {}

export const Search = (props: Props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={styles.search}>
            <InputGroup>
                <InputRightElement 
                    pointerEvents='none'
                    children={<SearchIcon color='gray.500' />}
                />
                <Input 
                    variant='flushed'
                    placeholder='Search ...' 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    _focusVisible={{borderColor: 'var(--dark-green)'}}
                />
            </InputGroup>
        </div>
    )
}