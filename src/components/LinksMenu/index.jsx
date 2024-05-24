import { Link } from "react-router-dom";
import { useState } from 'react';
import styles from './MenuLinks.module.scss';
import { FaChevronDown } from 'react-icons/fa';
import { GoDownload } from "react-icons/go";
import brflag from '../../public/assets/icons/BR.webp';
import euflag from '../../public/assets/icons/eua.webp';

export default function MenuLinks() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <section className={styles.menuLinks}>
            <Link to="./">
                Início
            </Link>
            <Link to="./sobre">
                Sobre
            </Link>
            <Link to="./habilidades">
                Habilidades
            </Link>
            <Link to="./projetos">
                Projetos
            </Link>
            <Link to="./contato">
                Contato
            </Link>
            <Link to="./hobbies">
                Hobbies
            </Link>
            <div
                className={styles.subMenuContainer}
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
            >
                <Link className={styles.menuLink} to="/">
                   Baixar CV 
                    <FaChevronDown className={styles.arrow} />
                </Link>
                {showSubMenu && (
                    <div className={styles.subMenu}>
                        <a href="https://drive.google.com/file/d/1n_LfAgGwAXUYOQV4Kr1pKdIe9E__ukBb/view?usp=sharing" rel="noreferrer" target="_blank">Português <img src={brflag} alt="bandeira do brasil" /></a>
                        <a href="https://drive.google.com/file/d/1rOYKPQFoZ00veHIbaxrLT2v6fTVwNiin/view?usp=sharing" rel="noreferrer" target="_blank">English <img src={euflag} alt="bandeira dos estados unidos da america" /></a>
                    </div>
                )}
            </div>
        </section>
    )
}
