import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg' // Dessa formadá para utilizar esse svg como um componente.

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido no Curso Alura
        </footer>
    )
}