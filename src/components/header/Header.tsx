import styles from './Header.module.css';
import Menu from '../menu/Menu';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className={styles.logo}>
                        <a className="d-block p-3" href="/">Tarea Clase 2</a>
                    </div>
                    <div className="menu flex-1 d-flex flex-column justify-content-center">
                        <Menu></Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
