import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import styles from './Post.module.scss';
import Card from "components/Card"; // Certifique-se de que o caminho está correto
import carregando from '../../public/assets/img/carregando.gif';
import dadosLocais from '../../components/json/db.json'; // Ajuste o caminho conforme necessário

export default function Post({ title }) {
    const [projeto, setProjeto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Encontra o projeto pelo ID
        const projetoEncontrado = dadosLocais.projetos.find(projeto => projeto.id === parseInt(id));
        setProjeto(projetoEncontrado);
    }, [id]);

    return (
        <article className={styles.post}>
            {projeto ? (
                <div className={styles.post__artigo}>
                    {/* Assume que o campo 'imagem' contém a URL completa da imagem */}
                    <img src={projeto.imagem} alt={projeto.titulo} />
                    <h2>{projeto.titulo}</h2>
                    <ReactMarkdown>
                        {projeto.post.replace(/\\n/g, '\n')}
                    </ReactMarkdown>
                </div>
            ) : (
                <img src={carregando} alt="Carregando..." />
            )}
            <h2>Veja mais projetos:</h2>
            <div className={styles.post__cards}>
                {/* Embaralha e seleciona até 3 projetos para mostrar como recomendações */}
                {dadosLocais.projetos.sort(() => Math.random() - 0.5).slice(0, 3).map(projeto => (
                    <Card
                        key={projeto.id}
                        id={projeto.id}
                        image={projeto.imagem}
                        title={projeto.titulo}
                        summary={projeto.resumo}
                        skills={projeto.stacks} // Assumindo que 'skills' corresponde a 'stacks'
                        project_link={projeto.deploy}
                        repo_link={projeto.repositorio}
                    />
                ))}
            </div>
        </article>
    );
}
