import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={classNames(styles.logo, styles.link)}>
                Bannanna / Studios
            </Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={classNames(
                        ({ isActive }) => classNames({ [styles.active]: isActive }),
                        styles.navLink
                    )}
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={classNames(
                        ({ isActive }) => classNames({ [styles.active]: isActive }),
                        styles.navLink1
                    )}
                >
                    About
                </NavLink>
            </div>
        </div>
    );
};
