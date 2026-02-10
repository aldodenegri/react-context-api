import Navbar from '../components/Navbar.jsx'
import { useContext } from 'react';
import {useBudget} from '../contexts/BudgetContext.jsx';
function HomePage(){
    const {budgetMode, toggleBudgetMode} = useBudget();
    return (
        <>
            <h1>Benvenuto nella HomePage</h1>
            <button onClick={toggleBudgetMode}>{budgetMode ? "Disattiva Budget Mode" : "Attiva Budget Mode"}</button>
            {console.log(budgetMode)}
        </>
    );
}export default HomePage