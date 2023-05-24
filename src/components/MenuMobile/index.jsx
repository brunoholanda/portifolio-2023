import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';
import styles from './MenuMobile.module.scss';
import { Link } from 'react-router-dom';

export default function MenuMobile() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleItemClick = (e) => {
        setOpen(false);
    }


    return (
        <>
            <nav>
                <HamburgerMenu
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color="#3f51b5"
                    size={60}
                />
            </nav>
            {isOpen && (
                <ul className={styles.mobileMenu} onClick={handleItemClick}>
                    <Link to="./">
                        <li>Inicio</li>
                    </Link>
                    <Link to="./sobre">
                        <li>Sobre Mim</li>
                    </Link>
                    <Link to="./habilidades">
                        <li>Habilidades</li>
                    </Link>
                    <Link to="./projetos">
                        <li>Projetos</li>
                    </Link>
                    <Link to="./contato">
                        <li>Contato</li>
                    </Link>
                    <Link to="./hobbies">
                        <li>Hobbies</li>
                    </Link>
                    <div className={styles.mobileMenu__cv}>
                        <a href="https://drive.google.com/file/d/1bbHINj0agyZmsVAHPf_fd-G9-FNzqny6/view?usp=sharing" rel="noreferrer" target="_blank">Baixar CV</a>
                    </div>
                </ul>
            )}
        </>
    );
}


