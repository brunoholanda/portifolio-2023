import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card';
import carregando from '../../public/assets/img/carregando.gif';

const baseUrl = 'http://localhost:8000';

export default function MyProjectsPage() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/api/posts`)
            .then(resposta => resposta.json())
            .then(dados => {
                setProjetos(dados)

            })
    }, [])


    return (
        <section className={styles.projetos}>
            <div className={styles.projetos__descricao}>
                <h2>Projetos Publicados</h2>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.length > 0 ? (
                    projetos.map((projeto) => <Card {...projeto} key={projeto.id} />)
                ) : (
                    <img src={carregando} alt="carregando projeto"/>
                )}
            </div>
        </section>
    )
}