import { useEffect, useState } from 'react';
import styles from './ProjetosPage.module.scss';
import Card from 'components/Card';

export default function ProjetosPage() {

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
                <h2>Projetos Publicados</h2>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.map((projeto) => {
                    return <Card {...projeto} key={projeto.id} />
                })}
            </div>
        </section>
    )
}