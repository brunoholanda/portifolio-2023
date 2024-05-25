import styles from './Skills.module.scss';
import html from '../../public/assets/icons/html.svg';
import css from '../../public/assets/icons/css.svg';
import js from '../../public/assets/icons/js.svg';
import react from '../../public/assets/icons/react.svg';
import sass from '../../public/assets/icons/sass.svg';
import git from '../../public/assets/icons/git-icon.svg';
import vscode from '../../public/assets/icons/vscode.svg';
import github from '../../public/assets/icons/github-fill.svg';
import wordpress from '../../public/assets/icons/wordpress.png';
import node from '../../public/assets/icons/node.png';
import pg from '../../public/assets/icons/pg.svg';
import { useLanguage } from 'Context/LanguageContext';

export default function Skills() {
    const { language } = useLanguage(); // Use o contexto de idioma

    const habilidades = [
        { imagem: html },
        { imagem: css },
        { imagem: js },
        { imagem: react },
        { imagem: node },
        { imagem: pg },
        { imagem: sass },
        { imagem: git },
        { imagem: vscode },
        { imagem: github },
        { imagem: wordpress },
    ];

    return (
        <div className={styles.habilidades}>
            <h2>{language === 'pt-br' ? 'Minhas Habilidades Tech' : 'My Tech Skills'}</h2>
            <p>{language === 'pt-br' ? 'Tecnologias que eu venho trabalhando...' : 'Technologies I have been working with...'}</p>
            <div className={styles.habilidades__icones}>
                {habilidades.map((habilidade, index) => (
                    <img key={index} src={habilidade.imagem} alt="habilidade" />
                ))}
            </div>
        </div>
    );
}
