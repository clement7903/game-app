import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';

const NavBar = () => {
    const { isLoggedIn, logoutHandler } = useContext(AuthContext);

    return (
        <nav className={styles.navContainer}>
            {isLoggedIn && <p>Logged in</p>}
            {!isLoggedIn && <p>Logged out</p>}

            <NavLink to='/' className={({ isActive }) => {
                return isActive ? styles.navItemActive : styles.navItem;
            }}>Home</NavLink>

            {isLoggedIn && (<NavLink to='/game' className={({ isActive }) => {
                return isActive ? styles.navItemActive : styles.navItem;
            }}>Game</NavLink>)}

            <NavLink to='about' className={({ isActive }) => {
                return isActive ? styles.navItemActive : styles.navItem;
            }}>About</NavLink>
            <NavLink to='contact' className={({ isActive }) => {
                return isActive ? styles.navItemActive : styles.navItem;
            }}>Contact</NavLink>

            {!isLoggedIn && (<NavLink to='login' className={({ isActive }) => {
                return isActive ? styles.navItemActive : styles.navItem;
            }}>Login</NavLink>)}

            {isLoggedIn && (
                <p className={styles.navItem} onClick={logoutHandler}>
                    Log Out
                </p>
            )}
        </nav>
    );
}

export default NavBar;