import logo from './logo.png';
import search from './search.png';
import styles from './Cabecalho.module.scss';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do alura space" />
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    );
}

export default Cabecalho;