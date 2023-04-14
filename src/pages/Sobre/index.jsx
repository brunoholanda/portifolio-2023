import { useState } from 'react';
import styles from './Sobre.module.scss';
import adm from '../../public/assets/img/certifcados/superioradm.jpg';
import ads from '../../public/assets/img/certifcados/ads.jpg';
import divisor from '../../public/assets/img/divisor-2.png';
import Botao from 'components/Botao';

export default function Sobre() {
    const [showAds, setShowAds] = useState(false);
    const [showAdm, setShowAdm] = useState(false);

    function handleLinkClickAds(event) {
        event.preventDefault();
        setShowAds(true);
    }
    function handleLinkClickAdm(event) {
        event.preventDefault();
        setShowAdm(true);
    }

    function handleCloseClickAds() {
        setShowAds(false);
    }
    function handleCloseClickAdm() {
        setShowAdm(false);
    }

    return (
        <div className={styles.sobre}>
            <div className={styles.sobre__descricao}>
                <h2>Sobre Mim</h2>
                <p>Desenvolvedor Front-End React codando páginas Mobile First com responsividade, aplicando SASS e JavaScript, foco em entrega rápida, qualidade e ótimas funcionalidades. </p>
                <p>Já criei sites para restaurante, barbearia, lojas online, marketplace para vender artes. Atualmente estou desenvolvendo em React e possuo capacidade rápida de aprendizado.</p>
                <p>Sempre gostei de criar coisas, aos 16 anos automatizei a casa dos meus pais usando Arduino, programando em C. Já desenvolvi alguns aplicativos para automação vendidos na internet, como um app para controlar o motor do portão pelo WIFI e Espelho inteligente em Python;</p>
                <p>Estou inserido no mercado de trabalho como bancário desde 2010. Também atuo na área de desenvolvimento criando projetos pessoais como freelancer para clientes.</p>
            </div>
            
            <div className={styles.sobre__experiencia}>
                <h2>Experiência</h2>
                <h3>Desenvolvedor Front-End - Autônomo</h3>
                <h4>O que eu faço:</h4>
                <p>Desenvolvimento de websites Mobile First com responsividade, utilizando ReactJS, JavaScript, CSS, SASS e HTML aplicando conceitos de API`s. Foco em entrega rápida, qualidade e ótimas funcionalidades.</p>
                <p>| Janeiro 2022 - presente</p>
                <img src={divisor} alt="divisor de experiencias" />
                <h3>Gerente Administrativo - Banco Bradesco</h3>
                <h4>O que eu fçco:</h4>
                <p>Conduzo uma equipe com 32 funcionários, sendo o grande propagador do compliance da empresa lidando com pessoas e alta quantidade de informações. Sugeri alterações e melhorias sistêmicas com base nos meus conhecimentos em tecnologia com a finalidade de reduzir custos e riscos</p>
                <p>| Março 2012 - presente</p>
                <img src={divisor} alt="divisor de experiencias" />
            </div>
            <div className={styles.sobre__formacao}>
                <h2>Formação Acadêmica</h2>
                <div className={styles.formacao}>
                    <p>Análise e Desenvolvimento de Sistemas - Unopar </p>
                    <Botao><a href="#" onClick={handleLinkClickAds}>Ver Certificado</a></Botao>
                </div>
                {showAds && (
                <div className={styles.imageContainer} onClick={handleCloseClickAds}>
                    <img src={ads} alt="Certificado de Administração" />
                </div>
            )}
                <img src={divisor} alt="divisor de experiencias" />
                <div className={styles.formacao}>
                    <p>Administracao de pessoas - IFPB </p>
                    <Botao><a href="#" onClick={handleLinkClickAdm}>Ver Certificado</a></Botao>
                </div>
            </div>
            {showAdm && (
                <div className={styles.imageContainer} onClick={handleCloseClickAdm}>
                    <img src={adm} alt="Certificado de Administração" />
                </div>
            )}
        </div>
    );
}
