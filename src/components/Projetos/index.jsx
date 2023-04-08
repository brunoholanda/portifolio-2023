import { useEffect, useState } from 'react';
import styles from './Projetos.module.scss';
import Card from '../Card';

export default function Projetos() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/portifolio-api/projetos')
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