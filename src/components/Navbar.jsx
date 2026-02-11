import { NavLink, Link, useLocation } from "react-router-dom";
import style from './Navbar.module.css';
import { useBudget } from '../contexts/BudgetContext.jsx'
function Navbar() {
    const { budgetMode, toggleBudgetMode } = useBudget();

    const location = useLocation();
    const showBudgetButton = ["/Products"].includes(location.pathname);//non considera le subroutes: /Products/sas non valido
    //in caso usare ,startsWith("")
    /*

    const showBudgetButton = location.pathname.startsWith("/Products") ||  location.pathname === ...
                        
    */
    return (
        <>
            <nav>

                <div>
                    <NavLink className={style.link} to="/">HomePage </NavLink> {/*navlink rispetto a link aggiunge una classe active*/}
                    <NavLink className={style.link} to="/About">Chi Siamo </NavLink>
                    <NavLink className={style.link} to="/Products">Prodotti</NavLink>
                </div>

                {showBudgetButton && <div><button onClick={() => toggleBudgetMode()}>{budgetMode ? "Disattiva Budget Mode" : "Attiva Budget Mode"}</button></div>}
            </nav>
        </>
    );
} export default Navbar;