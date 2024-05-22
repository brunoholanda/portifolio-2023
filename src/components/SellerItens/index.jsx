import React from 'react';
import HotmartButton from './HotMartBook';
import HotmartCursoButton from './HotMartCurso';
import curso from '../../public/assets/img/curso-min.webp';
import livro from '../../public/assets/img/livro.webp';
import styles from './SellerItens.module.scss';


const ItensParaVenda = () => {


    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <h5>Adquira meu livro</h5>
                <img className={styles.card__imagem} src={livro} alt="Livro para quem quer migrar de carreira" />
                <div lassName={styles.card__botao}>
                    <HotmartButton />
                </div>
            </div>
            <div className={styles.card}>
                <h5>Adquira meu curso para iniciantes</h5>
                <a href="https://go.hotmart.com/X92541881K" target='__blank'>
                    <img className={styles.card__imagem} src={curso} alt="compre o curso para iniciantes em programacao" />
                </a>
                <div lassName={styles.card__botao}>
                    <HotmartCursoButton />
                </div>
            </div>
        </div>

    );
};

export default ItensParaVenda;
