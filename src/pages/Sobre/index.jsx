import { useState } from 'react';
import styles from './Sobre.module.scss';
import adm from '../../public/assets/img/certifcados/superioradm.jpg';
import divisor from '../../public/assets/img/divisor-2.png';
import Botao from 'components/Botao';

export default function Sobre() {
    const [showImage, setShowImage] = useState(false);

    function handleLinkClick(event) {
        event.preventDefault();
        setShowImage(true);
    }

    function handleCloseClick() {
        setShowImage(false);
    }

    return (
        <div className={styles.sobre}>
            <div className={styles.sobre__descricao}>
                <h2>Sobre Mim</h2>
                <p>Desenvolvedor Front-End React codando páginas Mobile First com responsividade, aplicando SASS e JavaScript, foco em entrega rápida, qualidade e ótimas funcionalidades. </p>
                <p>Já criei sites para restaurante, barbearia, lojas online, marketplace para vender artes. Atualmente estou desenvolvendo em React e possuo capacidade rápida de aprendizado.</p>
                <p>Sempre gostei de criar coisas, aos 16 anos automatizei a casa dos meus pais usando Arduino, programando em C. Já desenvolvi alguns aplicativos para automação vendidos na internet, como um app para controlar o motor do portão pelo WIFI e Espelho inteligente em Python;</p>
                <p>Estou inserido no mercado de trabalho como bancário desde 2010. Também atuo na área de desenvolvimento criando projetos pessoais como freelancer para clientes. Você pode conferir meus trabalhos em:</p>
            </div>
            <div className={styles.sobre__experiencia}>
                <h2>Experiência</h2>
                <p>Desenvolvedor Fron-End Autônomo</p>
                <img src={divisor} alt="divisor de experiencias" />
                <p>Gerente Administrativo - Banco Bradesco</p>
                <img src={divisor} alt="divisor de experiencias" />
            </div>
            <div className={styles.sobre__formacao}>
                <h2>Formação Acadêmica</h2>
                <div className={styles.formacao}>
                    <p>Análise e Desenvolvimento de Sistemas - Unopar </p>
                    <Botao>Ver Certificado</Botao>
                </div>
                <div className={styles.formacao}>
                    <p>Administracao de pessoas - IFPB </p>
                    <Botao><a href="#" onClick={handleLinkClick}>Ver Certificado</a></Botao>
                </div>
            </div>
            {showImage && (
                <div className={styles.imageContainer} onClick={handleCloseClick}>
                    <img src={adm} alt="Certificado de Administração" />
                </div>
            )}
        </div>
    );
}
