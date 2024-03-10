import { useEffect, useState } from 'react';
import styles from './MyProjects.module.scss';
import Card from '../Card';
import { BASE_URL } from 'config';
import dadosLocais from '../json/db.json'; // Ajuste o caminho de acordo com a estrutura do seu projeto


export default function MyProjects() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProjetos(dadosLocais.projetos);
            console.log('projetos', dadosLocais.projetos)
        }, 0);
    }, []);

    return (
        <section className={styles.projetos}>
            <div className={styles.projetos__descricao}>
                <h2>Projetos</h2>
                <h3>Meus projetos mais recentes</h3>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.slice(0, 6).map((projeto) => {
                    // Aqui, ajustamos as propriedades para corresponder ao esperado pelo componente Card
                    return <Card 
                        key={projeto.id}
                        id={projeto.id}
                        image={projeto.imagem}
                        title={projeto.titulo}
                        summary={projeto.resumo}
                        skills={projeto.stacks} // Assumindo que 'skills' corresponda a 'stacks'
                        project_link={projeto.deploy}
                        repo_link={projeto.repositorio}
                    />
                })}
            </div>

        </section>
    );
}