import { useEffect, useState } from 'react';
import styles from './Hobbies.module.scss';
import Card from 'components/Card';
import carregando from '../../public/assets/img/carregando.gif';
import CardHobbie from './CardHobbie';

export default function Hobbies() {

    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/2d1bb2ab-3521-4720-aaeb-f5764f1c12b5')
            .then(resposta => resposta.json())
            .then(dados => {
                setHobbies(dados)

            })
    }, [])


    return (
        <div className={styles.hobbies}>
            <h1>Meus Hobbies</h1>
            <p>Aqui você pode conferir o que gosto de fazer no meu tempo livre</p>
            <h2>Criar coisas que outras pessoas podem usar</h2>
            <p>Em 2013 subi meu primeiro video no Youtube e nele eu mostrava uma fechadura eletrônica feita com sucata de um gravador de DVD</p>
            <p>Desde então sempre que tenho um tempo livre posto novos vídeos ensinando as pessoas a fazerem algumas engenhocas interessantes e a seguir você pode conferir algumas delas:</p>
            <div className={styles.hobbies__cards}>
            {hobbies.length > 0 ? (
                    hobbies.map((hobbie) => <CardHobbie {...hobbie} key={hobbie.id} />)
                ) : (
                    <img src={carregando} alt="carregando projeto"/>
                )}
            </div>
        </div>
    )
}