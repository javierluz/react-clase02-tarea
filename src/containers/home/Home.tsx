import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.css';
import SectionPrimary from '../../components/section-primary/SectionPrimary';
import SectionSecondary from '../../components/section-secondary/SectionSecondary';
import MessagesContext from '../../contexts/MessagesContext';
import { useState } from 'react';

const Home = () => {
    const [messages, setMessage] = useState<string[]>(['Holi, qué tal?', 'Holo, quó tol?', 'Hulu, quú tul?' ])
    
    return (
        <div className="wrapper">
            <Header></Header>
            
            <div className={`${styles.home} py-5`}>
                <MessagesContext.Provider value={{ messages: messages }}>
                    <SectionPrimary></SectionPrimary>

                    <SectionSecondary></SectionSecondary>
                </MessagesContext.Provider>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Home;
