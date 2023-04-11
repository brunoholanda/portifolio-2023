import styles from './Contato.module.scss';

export default function Contato() {
    return (
        <div className={styles.contato}>
            <h1>Entre em contato</h1>
            <div className={styles.contato__meios}>
                <h2>Email:</h2>
                <p>holanda_rodrigues@hotmail.com</p>
                <h2>Telefone</h2>
                <p> (83) 9 9815-0712</p>
                <h2>Onde eu Resido</h2>
                <p> Joao Pessoa - PB</p>
            </div>
            <h1>Redes Sociais</h1>
            <div className={styles.contato__redes}>

            </div>
        </div>
    )
}