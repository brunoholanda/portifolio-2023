import SocialLinks from "components/SocialLinks";
import styles from './Footer.module.scss'
import TextoDuasCores from "components/TwoColorsText";
import Divisor from "components/Divisor";
import MenuLinks from "components/LinksMenu";

export default function Footer() {
    return (
        <header className={styles.rodape}>
            <div className={styles.rodape__contato}>
                <SocialLinks />
                <a href="mailto:holanda_rodrigues@hotmail.com?subject=Contato">holanda_rodrigues@hotmail.com</a>
            </div>
            <Divisor />
            <div className={styles.rodape__links}>
                <div className={styles.menuLinks}>
                    <MenuLinks />
                </div>
                <TextoDuasCores
                    texto="Desenvolvido por Bruno Holanda"
                    palavra1="Bruno"
                    cor1="#3f51b5"
                    palavra2="Holanda"
                    cor2="#3f51b5"
                />
            </div>
        </header>
    )
}