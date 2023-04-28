import styles from './CardHobbie.module.scss';
import youtube from '../../../public/assets/icons/youtube.png';
import github from '../../../public/assets/icons/mini-git-hub.png';

export default function CardHobbie({ id, imagem, titulo, resumo, stacks, video, repositorio }) {

    return (
        <div className={styles.card}>
            <div className={styles.card__imagem}>
            <img src={imagem} alt={titulo} />
                <div className={styles.card__texto}>
                    <h3>{titulo}</h3>
                    <h4>{resumo}</h4>
                    <p>Habilidades: {stacks}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={video} target="_blank">
                    <div className={styles.link__icone}>
                        <img src={youtube} alt="icone pequeno de clipe de papel" />
                        <p>Ver Vídeo</p>
                    </div>
                </a>
                <a href={repositorio} target="_blank">
                    <div className={styles.link__icone}>
                        <img src={github} alt="icone pequeno do github" ></img>
                        <p>Repositório</p>
                    </div>
                </a>
            </div>
        </div>

    )
}