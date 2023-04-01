import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Ícone de home" />
                    <a href="">Ínicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="Ícone de curtida" />
                    <a href="">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="Ícone de olho" />
                    <a href="">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="Ícone de novas" />
                    <a href="">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt="Ícone de surpreenda" />
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;