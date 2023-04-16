import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card';
import carregando from '../../public/assets/img/carregando.gif';

export default function MyProjectsPage() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/677dfb3d-0e11-48d2-930b-d87f1e1dfe04')
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