import Icone from './Icone';
import styles from './Menu.module.scss';
import icones from './icones.json';


const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map((icone) => {
                    return(
                        <Icone key={icone.id} icone={icone} styles={styles} />    
                    );
                })}
            </ul>
        </nav>
    );
}

export default Menu;