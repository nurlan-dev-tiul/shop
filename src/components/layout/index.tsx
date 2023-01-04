import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import styles from './layout.module.scss';

type AppLayoutTypes = {

}

export const AppLayout: FC<AppLayoutTypes> = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}> 
                <Outlet />
            </main>
        </div>
    )
}