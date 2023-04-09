import SocialLinks from "components/SocialLinks";
import styles from './Cabecalho.module.scss'
import MenuLinks from "components/LinksMenu";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <SocialLinks />
            <MenuLinks />
        </header>
    )
}