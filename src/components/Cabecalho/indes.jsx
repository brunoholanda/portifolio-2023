import SocialLinks from "components/SocialLinks";
import styles from './Cabecalho.module.scss'
import MenuLinks from "components/LinksMenu";
import MenuCelular from "components/MenuCelular/MenuCelular";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__celular}>
                <MenuCelular />
            </div>
            <div className={styles.cabecalho__social}>
                <SocialLinks />
            </div>
            <div className={styles.cabecalho__links}>
                <MenuLinks />
            </div>

        </header>
    )
}