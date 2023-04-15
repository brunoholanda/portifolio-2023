import styles from './Presentation.module.scss';
import TextoDuasCores from 'components/TwoColorsText';
import profile from '../../public/assets/img/profile-me.png';

export default function Presentation() {
    return (
        <div className={styles.introducao}>
            <div className={styles.introducao__texto}>
                <h1>Oi 👋,</h1>
                <TextoDuasCores
                    texto="Eu sou o Bruno Holanda "
                    palavra1="Bruno"
                    palavra2="Holanda"
                    cor1="#3f51b5"
                    cor2="#3f51b5"
                />
                <TextoDuasCores
                    texto="Desenvolvedor Front-End"
                    palavra1="Front-End"
                    cor1="#3f51b5"
                />
            </div>
            <div className={styles.introducao__imagem}>
                <img src={profile} alt="foto do perfil bruno holanda" />
            </div>
        </div>
    )
}