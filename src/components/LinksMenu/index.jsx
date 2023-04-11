import { Link } from "react-router-dom";
import styles from './MenuLinks.module.scss';

export default function MenuLinks() {
    return (
        <section className={styles.menuLinks}>
            <Link to="./">
                Início
            </Link>
            <Link to="./sobre">
                Sobre Mim
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
            <Link to="./hobby">
                Hobbies
            </Link>
        </section>
    )
}