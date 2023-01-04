import { Cart } from './cart';
import { Menu } from './menu';
import { Search } from './search';

import styles from './header.module.scss';

type Props = {}

export const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <Menu />
            <div className={styles.header_right}>
                <Search />
                <Cart />
            </div>
        </header>
    )
}
