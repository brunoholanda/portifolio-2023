import { useEffect, useState } from 'react';
import styles from './MyProjects.module.scss';
import Card from '../Card';
import { BASE_URL } from 'config';


export default function MyProjects() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/api/posts`)
            .then(resposta => resposta.json())
            .then(dados => {
                setProjetos(dados)

            })
    }, [])


    return (
        <section className={styles.projetos}>
            <div className={styles.projetos__descricao}>
                <h2>Projetos</h2>
                <h3>Meus projetos mais recentes</h3>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.slice(0, 6).map((projeto) => {
                    return <Card {...projeto} key={projeto.id} />
                })}
            </div>
        </section>
    )
}