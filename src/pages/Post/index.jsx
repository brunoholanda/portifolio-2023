import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import styles from './Post.module.scss';
import Card from "components/Card";

export default function Post() {
    const [projetos, setProjetos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/brunoholanda/portifolio-api/projetos')
            .then(resposta => resposta.json())
            .then(dados => {
                setProjetos(dados)
            })
    }, [])

    const projeto = projetos.find(projeto => projeto.id === parseInt(id));

    return (
        <article className={styles.post}>
            {projeto ? (
                <div className={styles.post__artigo}>
                    <img src={projeto.imagem} alt={projeto.titulo} />
                    <h2>{projeto.titulo}</h2>
                    <ReactMarkdown>{projeto.post}</ReactMarkdown>
                </div>
            ) : (
                <p>Projeto não encontrado.</p>
            )}
            <h2>Veja mais projetos:</h2>
            <div className={styles.post__cards}>
                {projetos.sort(() => Math.random() - 0.5).slice(0, 3).map((projeto) => {
                    return <Card {...projeto} key={projeto.id} />
                })}
            </div>
        </article>
    )
}
