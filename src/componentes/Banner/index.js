import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Fulano, Lorem Ipsum is simply dummy text of the printing and typesetting industry. :) 
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt='Circulo colorido' aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto do Antonio Evaldo sorrindo' aria-hidden={true}/>
            </div>
        </div>
    )
}