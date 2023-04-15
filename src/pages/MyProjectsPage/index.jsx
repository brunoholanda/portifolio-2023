import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card';
import carregando from '../../public/assets/img/carregando.gif';

export default function MyProjectsPage() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/9c615f44-dfd2-425c-8f17-2ca2b679e2b8')
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