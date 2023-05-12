import { Link } from "react-router-dom";
import styles from './MenuLinks.module.scss';

export default function MenuLinks() {
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
            <div className={styles.header__cv}>
                <a href="https://drive.google.com/file/d/1bbHINj0agyZmsVAHPf_fd-G9-FNzqny6/view?usp=sharing" rel="noreferrer" target="_blank">Baixar CV</a>
            </div>
        </section>
    )
}