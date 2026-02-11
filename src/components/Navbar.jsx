import { NavLink, Link } from "react-router-dom";
import style from './Navbar.module.css';
import { useBudget } from '../contexts/BudgetContext.jsx'
function Navbar() {
    const { budgetMode, toggleBudgetMode } = useBudget();
    return (
        <>
            <nav>
                <div><button onClick={() => toggleBudgetMode()}>{budgetMode ? "Disattiva Budget Mode" : "Attiva Budget Mode"}</button></div>
                <div>
                    <NavLink className={style.link} to="/">HomePage </NavLink> {/*navlink rispetto a link aggiunge una classe active*/}
                    <NavLink className={style.link} to="/About">Chi Siamo </NavLink>
                    <NavLink className={style.link} to="/Products">Prodotti</NavLink>
                </div>
            </nav>
        </>
    );
} export default Navbar;