import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
let maxBudget = 20000;
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        if(remaining < 0){
            alert("You cannot reduce the budget value lower than the spending")
        }
       
        if (event.target.value > maxBudget){
            alert("Budget exceeds.")
            event.target.value = maxBudget
        }
        //alert("Current budget: "+event.target.value);
        setNewBudget(event.target.value);
        
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: </span>
<input type="number" step="10" max={maxBudget} value={newBudget} onKeyUp={handleBudgetChange} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;