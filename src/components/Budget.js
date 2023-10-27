import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
let maxBudget = 20000;
const Budget = () => {
    

    const { dispatch } = useContext(AppContext);

    const setBudget = (toModify) =>{
        const nBudget = toModify;
        dispatch({
            type: 'SET_BUDGET',
            payload: nBudget
        });
        
    }
    const {currency} = useContext(AppContext);
    //const { budget } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');
    //const [budgetToadd, setBudget] = useState('');
    const handleBudgetChange = (event) => {
        
        
        //alert((event.target.value-remaining));
        if(remaining < 0){
            alert("You cannot reduce the budget value lower than the spending")
            
            event.target.value = maxBudget
        }
       
        if (event.target.value > maxBudget){
            alert("Budget cannot exceed "+currency+"20000.")
            event.target.value = maxBudget
        }
        //alert("Current budget: "+event.target.value); 
        
        
        setBudget(event.target.value);
        setNewBudget(event.target.value);
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input  type="number" data-type='currency' step="10" min={0} max={maxBudget} value={newBudget} onChange={handleBudgetChange }></input>
</div>
    );
};
export default Budget;

// const increaseAllocation = (name) => {
//     const expense = {
//         name: name,
//         cost: 10,
//     };

//     dispatch({
//         type: 'ADD_EXPENSE',
//         payload: expense
//     });

// }