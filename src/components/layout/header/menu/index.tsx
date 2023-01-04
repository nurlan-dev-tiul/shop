import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { menu } from './menu.data';

import styles from './menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt="Logo" />
            </Link>
            <nav>
                <ul className={styles.nav_list}>
                    {menu.map(item => (
                        <li key={item.link}>
                            <Link 
                                className={styles.nav_item} 
                                to={item.link}
                            >
                                    {item.name}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </div>
    )
}