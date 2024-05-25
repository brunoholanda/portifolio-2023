import ItensParaVenda from 'components/SellerItens';
import styles from './Contact.module.scss';
import { useLanguage } from 'Context/LanguageContext';

export default function Contact() {
    const { language } = useLanguage(); // Use o contexto de idioma

    return (
        <div className={styles.contato}>
            <h1>{language === 'pt-br' ? 'Entre em contato' : 'Contact Me'}</h1>
            <div className={styles.contato__meios}>
                <h2>Email:</h2>
                <p>holanda_rodrigues@hotmail.com</p>
                <h2>{language === 'pt-br' ? 'Telefone' : 'Phone'}</h2>
                <p>(83) 9 9815-0712</p>
                <h2>{language === 'pt-br' ? 'Onde eu Resido' : 'Where I Live'}</h2>
                <p>João Pessoa - PB</p>
            </div>
            <h1>{language === 'pt-br' ? 'Redes Sociais' : 'Social Networks'}</h1>
            <div className={styles.contato__redes}>
                {/* Aqui você pode adicionar os links para as redes sociais */}
            </div>
            <ItensParaVenda />
        </div>
    );
}
