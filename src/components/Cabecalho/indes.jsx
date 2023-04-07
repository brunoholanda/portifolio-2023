import SocialLinks from "components/SocialLinks";
import CabecalhoLinks from "./CabecalhoLinks";
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <SocialLinks />
            <CabecalhoLinks />
        </header>
    )
}