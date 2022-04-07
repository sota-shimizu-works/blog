import { Link } from 'react-router-dom';
import styles from '../css/header.module.scss';

const Header = () => {
    return (
        <header className={`${styles.pageWidth} ${styles.globalHeader}`}>
            <h1><Link to="/">React memo</Link></h1>
        </header>
    )
}

export default Header