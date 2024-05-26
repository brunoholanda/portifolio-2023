import { Link } from "react-router-dom";
import { useState } from 'react';
import styles from './MenuLinks.module.scss';
import { FaChevronDown } from 'react-icons/fa';
import brflag from '../../public/assets/icons/BR.webp';
import euflag from '../../public/assets/icons/eua.webp';
import { useLanguage } from "Context/LanguageContext";

export default function MenuLinks() {
    const [showCvSubMenu, setShowCvSubMenu] = useState(false);
    const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    return (
        <section className={styles.menuLinks}>
            <Link to="./">
                {language === 'pt-br' ? 'Início' : 'Home'}
            </Link>
            <Link to="./sobre">
                {language === 'pt-br' ? 'Sobre' : 'About'}
            </Link>
            <Link to="./habilidades">
                {language === 'pt-br' ? 'Habilidades' : 'Skills'}
            </Link>
            <div
                className={styles.subMenuContainer}
                onMouseEnter={() => setShowProjectsSubMenu(true)}
                onMouseLeave={() => setShowProjectsSubMenu(false)}
            >
                <Link className={styles.menuLink} to="#">
                    {language === 'pt-br' ? 'Projetos' : 'Projects'}
                    <FaChevronDown className={styles.arrow} />
                </Link>
                {showProjectsSubMenu && (
                    <div className={styles.subMenu}>
                        <Link to="./projetos">{language === 'pt-br' ? 'Profissionais' : 'Professional'}</Link>
                        <Link to="./hobbies">{language === 'pt-br' ? 'Hobbies' : 'Hobbies'}</Link>
                    </div>
                )}
            </div>
            <Link to="./contato">
                {language === 'pt-br' ? 'Contato' : 'Contact'}
            </Link>
            <div
                className={styles.subMenuContainer}
                onMouseEnter={() => setShowCvSubMenu(true)}
                onMouseLeave={() => setShowCvSubMenu(false)}
            >
                <Link className={styles.menuLink} to="#">
                   {language === 'pt-br' ? 'Baixar CV' : 'Resume'}
                    <FaChevronDown className={styles.arrow} />
                </Link>
                {showCvSubMenu && (
                    <div className={styles.subMenu}>
                        <a href="https://drive.google.com/file/d/1n_LfAgGwAXUYOQV4Kr1pKdIe9E__ukBb/view?usp=sharing" rel="noreferrer" target="_blank">Português <img src={brflag} alt="bandeira do brasil" /></a>
                        <a href="https://drive.google.com/file/d/1rOYKPQFoZ00veHIbaxrLT2v6fTVwNiin/view?usp=sharing" rel="noreferrer" target="_blank">English <img src={euflag} alt="bandeira dos estados unidos da america" /></a>
                        <a href="https://drive.google.com/file/d/11Z29BuZJH1rJJNW0xZQ6vkdKhX6Assfy/view?usp=sharing" rel="noreferrer" target="_blank">Carta</a>
                    </div>
                )}
            </div>
            <div className={styles.languageSwitcher}>
                <button onClick={toggleLanguage} className={styles.languageButton} title="Change Language">
                    <img
                        src={language === 'pt-br' ? euflag : brflag}
                        alt={language === 'pt-br' ? 'bandeira dos estados unidos da america' : 'bandeira do brasil'}
                        className={styles.flagIcon}
                    />
                </button>
            </div>
        </section>
    )
}
