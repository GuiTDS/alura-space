import logo from './logo.png';
import search from './search.png';

const Cabecalho = () => {
    return (
        <header>
            <img src={logo} alt="Logo do alura space" />
            <div>
                <input type="text" placeholder="O que você procura?" />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    );
}

export default Cabecalho;