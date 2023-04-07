import SocialLinks from "components/SocialLinks";
import styles from './Rodape.module.scss'
import CabecalhoLinks from "components/Cabecalho/CabecalhoLinks";
import divisor from '../../public/assets/img/divisor.png';

export default function Rodape() {
    return (
        <header className={styles.rodape}>
            <div className={styles.rodape__contato}>
                <SocialLinks />
                <a href="mailto:holanda_rodrigues@hotmail.com?subject=Contato">holanda_rodrigues@hotmail.com</a>
            </div>
            <img src={divisor} alt="divisor do rodape da pagina" />
            <div className={styles.rodape__links}>
                <CabecalhoLinks />
                <p>Desenvolvido por Bruno Holanda</p>
            </div>
        </header>
    )
}