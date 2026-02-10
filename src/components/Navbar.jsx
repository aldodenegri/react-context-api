import { NavLink,Link } from "react-router-dom";
import style from './Navbar.module.css';
function Navbar(){
    return(
        <>
            <nav>
                <NavLink className={style.link} to="/">HomePage </NavLink> {/*navlink rispetto a link aggiunge una classe active*/}
                <NavLink className={style.link} to="/About">Chi Siamo </NavLink>
                <NavLink className={style.link} to="/Products">Prodotti</NavLink>
            </nav>
        </>
    );
}export default Navbar;