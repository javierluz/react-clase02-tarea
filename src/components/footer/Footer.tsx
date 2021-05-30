import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 text-center">
                        <div className={styles.logo}>
                            <a className="d-block p-3" href="/">Tarea Clase 2</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
