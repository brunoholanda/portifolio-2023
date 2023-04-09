import styles from './Card.module.scss';
import anexo from '../../public/assets/icons/anexo.png';
import github from '../../public/assets/icons/mini-git-hub.png';

export default function Card({ id, imagem, titulo, descricao, stacks, deploy, repositorio }) {

    return (
        <div className={styles.card}>
            <div className={styles.card__imagem} to={`${id}`}>
                <img src={imagem} alt={titulo} />
                <div className={styles.card__texto}>
                    <h3>{titulo}</h3>
                    <h4>{descricao}</h4>
                    <p>Habilidades: {stacks}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={deploy} target="_blank">
                    <div className={styles.link__icone}>
                        <img src={anexo} alt="icone pequeno de clipe de papel" />
                        <p>Ver Site</p>
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