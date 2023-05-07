import styles from './Card.module.scss';
import anexo from '../../public/assets/icons/anexo.png';
import github from '../../public/assets/icons/mini-git-hub.png';
import { Link } from 'react-router-dom';

export default function Card({ id, imagem, titulo, resumo, stacks, deploy, repositorio }) {

    return (
        <div className={styles.card}>
            <div className={styles.card__imagem}>
            <Link to={`/projetos/${id}`}>
                <img src={imagem} alt={titulo} />
                </Link>
                <div className={styles.card__texto}>
                    <h3>{titulo}</h3>
                    <h4>{resumo}</h4>
                    <p>Habilidades: {stacks}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={deploy} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={anexo} alt="icone pequeno de clipe de papel" />
                        <p>Ver Site</p>
                    </div>
                </a>
                <a href={repositorio} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={github} alt="icone pequeno do github" ></img>
                        <p>Repositório</p>
                    </div>
                </a>
            </div>
        </div>

    )
}