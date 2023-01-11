import styles from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import sair from '../../assets/logout.png';

function Navbar() {
        
    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
    
        window.location.replace('/');
      };

    return (
        <div className={styles.nav}>
                <Link to='/UserGenerator'>
                    <img className={styles.logo} src={logo} alt="logo Sharenergy"/>
                </Link>
                <ul className={styles.list}>
        
                    <li className={styles.item}>
                        <Link to='/UserGenerator'>User Generator</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/HttpCat'>HttpCat</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/RandomDog'>Random Dog</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Cadastro'>Cadastro</Link>
                    </li>
                </ul>

                <button onClick={handleLogout} className={styles.logout}>
                    <img src={sair} alt='logout'></img>
                </button>

        </div>
    )
}

export default Navbar