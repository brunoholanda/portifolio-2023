import styles from './Habilidades.module.scss';
import html from '../../public/assets/icons/html.svg';
import css from '../../public/assets/icons/css.svg';
import js from '../../public/assets/icons/js.svg';
import react from '../../public/assets/icons/react.svg';
import sass from '../../public/assets/icons/sass.svg';
import git from '../../public/assets/icons/git-icon.svg';
import vscode from '../../public/assets/icons/vscode.svg';
import github from '../../public/assets/icons/github-fill.svg';
import wordpress from '../../public/assets/icons/wordpress.png';

export default function Habilidades() {

    const habilidades = [
        { imagem: html },
        { imagem: css },
        { imagem: js },
        { imagem: react },
        { imagem: sass },
        { imagem: git },
        { imagem: vscode },
        { imagem: github },
        { imagem: wordpress },
    ]

    return (
        <div className={styles.habilidades}>
            <h2>Minhas Habilidades Tech</h2>
            <p>Tecnologias que eu venho trabalhando...</p>
            <div className={styles.habilidades__icones}>
                {habilidades.map((habilidade, index) => (
                    <img key={index} src={habilidade.imagem} alt="habilidade" />
                ))}
            </div>
        </div>
    )
}