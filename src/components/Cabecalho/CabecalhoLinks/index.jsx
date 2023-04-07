import { Link } from "react-router-dom";
import styles from './CabecalhoLinks.module.scss';

export default function CabecalhoLinks() {
    return (
        <section className={styles.cabecalhoLinks}>
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
        </section>
    )
}