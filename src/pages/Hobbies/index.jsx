import { useEffect, useState } from 'react';
import styles from './Hobbies.module.scss';
import carregando from '../../public/assets/img/carregando.gif';
import CardHobbie from './CardHobbie';
import dadosLocais from '../../components/json/db.json'; 

export default function Hobbies() {
    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        setHobbies(dadosLocais.hobbies);
    }, []);

    return (
        <div className={styles.hobbies}>
            <h1>Meus Hobbies</h1>
            <p>Aqui você pode conferir o que gosto de fazer no meu tempo livre</p>
            <h2>Criar coisas que outras pessoas podem usar</h2>
            <p>Em 2013 subi meu primeiro vídeo no Youtube e nele eu mostrava uma fechadura eletrônica feita com sucata de um gravador de DVD.</p>
            <p>Desde então sempre que tenho um tempo livre posto novos vídeos ensinando as pessoas a fazerem algumas engenhocas interessantes, e a seguir você pode conferir algumas delas:</p>
            <div className={styles.hobbies__cards}>
                {hobbies.length > 0 ? (
                    hobbies.map((hobbie) => <CardHobbie {...hobbie} key={hobbie.id} />)
                ) : (
                    <img src={carregando} alt="Carregando..." />
                )}
            </div>
        </div>
    );
}
