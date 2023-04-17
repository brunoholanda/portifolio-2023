import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card';
import carregando from '../../public/assets/img/carregando.gif';

export default function MyProjectsPage() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/ba501b7e-5428-4f5e-a7d3-e96d73fbd453')
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