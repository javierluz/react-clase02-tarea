import { useEffect, useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    type MenuItem = {
        name: string,
        url: string
    }
    const [items, setItems] = useState<MenuItem[]>([
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Section 1",
            url: "#section-1"
        },
        {
            name: "Section 2",
            url: "#section-2"
        }
    ]);

    return (
        <nav className={styles.mainNav}>
            {items.map((item, index) => (
                <a key={index} className={`${styles.link} px-3 py-2`} 
                    aria-current="page" 
                    href={item.url}>{item.name}</a>
            ))}
        </nav>
    );
}

export default Menu;
