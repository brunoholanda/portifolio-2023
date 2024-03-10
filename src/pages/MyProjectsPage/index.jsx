import { useEffect, useState } from 'react';
import styles from './MyProjectsPage.module.scss';
import Card from 'components/Card'; // Verifique o caminho
import carregando from '../../public/assets/img/carregando.gif';
import dadosLocais from '../../components/json/db.json'; // Ajuste o caminho conforme necessário

export default function MyProjectsPage() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setProjetos(dadosLocais.projetos);
    }, []);

    return (
        <section className={styles.projetos}>
            <div className={styles.projetos__descricao}>
                <h2>Projetos Publicados</h2>
            </div>
            <div className={styles.projetos__cards}>
                {projetos.length > 0 ? (
                    projetos.map((projeto) => (
                        <Card
                            key={projeto.id}
                            id={projeto.id}
                            image={projeto.imagem}
                            title={projeto.titulo}
                            summary={projeto.resumo}
                            skills={projeto.stacks} // Assumindo que 'skills' corresponda a 'stacks'
                            project_link={projeto.deploy}
                            repo_link={projeto.repositorio}
                        />
                    ))
                ) : (
                    <img src={carregando} alt="Carregando..." />
                )}
            </div>
        </section>
    );
}
