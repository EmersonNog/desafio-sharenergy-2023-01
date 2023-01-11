import styles from '../Styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.item}> 
                <li>
                    <a href="https://www.sharenergy.com.br/contato/" target="_blank" rel='noopener noreferrer'>Contato</a>
                </li>

                <li>
                    <a href="https://www.sharenergy.com.br/servicos/" target="_blank" rel='noopener noreferrer'>Serviços</a>
                </li>

                <li>
                    <a href="https://www.sharenergy.com.br/sobre-nos/" target="_blank" rel='noopener noreferrer'>Sobre nós</a>
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Sharenergy </span>&copy; 2022
            </p>
        </footer>
    )
}

export default Footer