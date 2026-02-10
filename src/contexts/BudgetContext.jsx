import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({children}){

    const [budgetMode, setBudgetMode] = useState(false);

    function toggleBudgetMode(){
            return setBudgetMode(prev => !prev);
    }
    const value = {budgetMode, toggleBudgetMode};
    return <BudgetContext.Provider value={value}>
		{children}
	</BudgetContext.Provider>
}

function useBudget(){
    const contestoBudget = useContext(BudgetContext);
    return contestoBudget;
}
export {BudgetProvider,useBudget};