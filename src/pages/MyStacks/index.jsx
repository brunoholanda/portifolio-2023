import styles from './MyStacks.module.scss';
import html from '../../public/assets/icons/html.svg';
import css from '../../public/assets/icons/css.svg';
import js from '../../public/assets/icons/js.svg';
import react from '../../public/assets/icons/react.svg';
import sass from '../../public/assets/icons/sass.svg';
import git from '../../public/assets/icons/git-icon.svg';
import vscode from '../../public/assets/icons/vscode.svg';
import github from '../../public/assets/icons/github-fill.svg';
import wordpress from '../../public/assets/icons/wordpress.png';
import { useState } from 'react';
import eftest from '../../public/assets/img/certifcados/english-prof.jpg';
import Botao from 'components/Btn';

export default function MyStacks() {

    const habilidades = [
        { nome: "HTML", imagem: html },
        { nome: "CSS", imagem: css },
        { nome: "JavaScript", imagem: js },
        { nome: "React", imagem: react },
        { nome: "Sass", imagem: sass },
        { nome: "Git", imagem: git },
        { nome: "VS Code", imagem: vscode },
        { nome: "GitHub", imagem: github },
        { nome: "WordPress", imagem: wordpress },
    ];

    const [showEftest, setShowEftest] = useState(false);

    function handleLinkClick(event) {
        event.preventDefault();
        setShowEftest(true);
    }

    function handleCloseClick() {
        setShowEftest(false);
    }


    return (
        <div className={styles.habilidades}>
            <h2>Minhas Habilidades Tech</h2>
            <div className={styles.habilidades__icones}>
                {habilidades.map((habilidade, index) => (
                    <div key={index}>
                        <img src={habilidade.imagem} alt={habilidade.nome} />
                        <p>{habilidade.nome}</p>
                    </div>
                ))}
            </div>

            <div className={styles.habilidades__idioma}>
                <h2>Segundo Idioma</h2>
                <div className={styles.idioma}>
                    <p>Inglês Avançado - Consigo me comunicar, ler e entender bem!</p>
                    <Botao><a href="#" onClick={handleLinkClick}>Ver Teste</a></Botao>
                </div>

            </div>
            {showEftest && (
                <div className={styles.imageContainer} onClick={handleCloseClick}>
                    <img src={eftest} alt="Certificado de Administração" />
                </div>
            )}

        </div>
    );
}