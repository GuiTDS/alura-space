import fotosPopulares from './fotos-populares.json';
import styles from './Populares.module.scss';

const Populares = () => {
    return ( 
        <aside  className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((foto) => {
                    return (
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    );
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
     );
}
 
export default Populares;