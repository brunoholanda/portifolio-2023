import { useState } from 'react';
import styles from './About.module.scss';
import adm from '../../public/assets/img/certifcados/superioradm.jpg';
import ads from '../../public/assets/img/certifcados/ads.jpg';
import divisor from '../../public/assets/img/divisor-2.png';
import Botao from 'components/Btn';
import styled from 'styled-components';
import ItensParaVenda from 'components/SellerItens';

export default function About() {
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

    const Titulo = styled.h2`
         font-size: 2.62rem;
        font-weight: 700;
        color: var(--preto-texto);
    `;

    return (
        <>
            <div className={styles.sobre}>
                <div className={styles.sobre__descricao}>
                    <Titulo>
                        <h2>Sobre Mim</h2>
                    </Titulo>
                    <p>Desenvolvedor  Web FullStack codando páginas Mobile First com responsividade, aplicando SASS e JavaScript, foco em entrega rápida, qualidade e ótimas funcionalidades. </p>
                    <p>Já criei sites para restaurante, barbearia, lojas online, marketplace para vender artes. Atualmente estou desenvolvendo em React e possuo capacidade rápida de aprendizado.</p>
                    <p>Sempre gostei de criar coisas, aos 16 anos automatizei a casa dos meus pais usando Arduino, programando em C. Já desenvolvi alguns aplicativos para automação vendidos na internet, como um app para controlar o motor do portão pelo WIFI e Espelho inteligente em Python;</p>
                    <p>Estou inserido no mercado de trabalho como bancário desde 2010. Também atuo na área de desenvolvimento criando projetos pessoais como freelancer para clientes.</p>
                </div>

                <div className={styles.sobre__experiencia}>
                    <h2>Experiência</h2>
                    <h3>Desenvolvolvedor Web FullStack na Elevaty</h3>
                    <h4>O que eu faço:</h4>
                    <p>Estou envolvido na criação e modificação de componentes React sob demanda. Participo das fases do ciclo de vida do desenvolvimento de software. Trabalho em estreita colaboração com equipes multifuncionais, empregando metodologias ágeis para garantir a entrega eficiente e de alta qualidade do nosso produto. Com um forte entendimento das melhores práticas de codificação e padrões, procuro sempre melhorar o desempenho e a usabilidade do nosso sistema. Adicionalmente, dedico-me a aprender novas tecnologias e técnicas para permanecer na vanguarda da inovação na indústria de desenvolvimento de software.</p>
                    <p>| Maio 2023 - presente</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                    <h3>Desenvolvedor  Web FullStack - Autônomo</h3>
                    <h4>O que eu faço:</h4>
                    <p>Desenvolvimento de websites e <strong>Sistemas Web Fullstack </strong> Mobile First com responsividade, utilizando ReactJS, JavaScript, CSS, SASS e HTML aplicando conceitos de API`s. Foco em entrega rápida, qualidade e ótimas funcionalidades.</p>
                    <p><strong>Projetos mais relevantes:</strong></p>
                    <ul>
                        <li>
                            <strong>Marquei Agenda Clínica:</strong> <a href="https://marquei.com.br/" target="_blank" rel='noreferrer'>https://marquei.com.br/</a>
                        </li>
                        <li>
                            <strong>Loja:</strong> <a href="https://nerdkingloja.com.br/" target="_blank" rel='noreferrer'>https://nerdkingloja.com.br/</a>
                        </li>
                        <li>
                            <strong>Amor e Vida:</strong> <a href="https://amorevida.org/" target="_blank" rel='noreferrer'>https://amorevida.org/</a>
                        </li>
                        <li>
                            <strong>Dentista:</strong> <a href="https://waleskacaetano.com.br/" target="_blank" rel='noreferrer'>https://waleskacaetano.com.br/</a>
                        </li>
                        <li>
                            <strong>Blog de Tecnologia:</strong> <a href="https://nerdking.net.br/" target="_blank" rel='noreferrer'>https://nerdking.net.br/</a>
                        </li>
                        <li>
                            <strong>Aniversário:</strong> <a href="https://niver-org-presentes.vercel.app/" target="_blank" rel='noreferrer'>https://niver-org-presentes.vercel.app/</a>
                        </li>
                    </ul>

                    <p>| Janeiro 2022 - presente</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
                    <h3>Gerente Administrativo - Banco Bradesco</h3>
                    <h4>O que eu faço:</h4>
                    <p>Conduzi uma equipe com 32 funcionários, sendo o grande propagador do compliance da empresa lidando com pessoas e alta quantidade de informações. Sugeri alterações e melhorias sistêmicas com base nos meus conhecimentos em tecnologia com a finalidade de reduzir custos e riscos</p>
                    <p>| Março 2012 - Janeiro 2024</p>
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
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
                    <img className={styles.divisorImg} src={divisor} alt="divisor de experiencias" />
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
            <ItensParaVenda />
        </>
    );
}
