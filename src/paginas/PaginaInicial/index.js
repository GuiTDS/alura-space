import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from './PaginaInicial.module.scss';

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />     
                    <Banner />
                </section>  
            </main>
        </>  
    );
}

export default PaginaInicial;