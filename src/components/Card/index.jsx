import styles from './Card.module.scss';
import anexo from '../../public/assets/icons/anexo.png';
import github from '../../public/assets/icons/mini-git-hub.png';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'config';

export default function Card({ id, image, title, summary, skills, project_link, repo_link }) {


    return (
        <div className={styles.card}>
            <div className={styles.card__imagem}>
                <Link to={`/projetos/${id}`}>
                    <img src={image} alt={title} />
                </Link>
                <div className={styles.card__texto}>
                    <h3>{title}</h3>
                    <h4>{summary}</h4>
                    <p>Habilidades: {skills}</p>
                </div>
            </div>
            <div className={styles.card__links}>
                <a href={project_link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={anexo} alt="icone pequeno de clipe de papel" />
                        <p>Ver Site</p>
                    </div>
                </a>
                <a href={repo_link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.link__icone}>
                        <img src={github} alt="icone pequeno do github" ></img>
                        <p>Repositório</p>
                    </div>
                </a>
            </div>
        </div>

    )
}