const Icone = (props) => {
    return (  
        <li className={props.styles.menu__item} >
            <img src={props.icone.path} alt={props.icone.alt} />
            <a href="/">{props.icone.link}</a>
        </li>
    );
}
 
export default Icone;