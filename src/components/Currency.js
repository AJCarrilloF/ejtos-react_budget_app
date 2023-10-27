import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Currency = () => {
    

    const { dispatch } = useContext(AppContext);

    const setCurrency = (toModify) =>{
        const nCurrency = toModify;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: nCurrency
        });
        
    }

    
    
    //const [budgetToadd, setBudget] = useState('');
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    
    return (

        <div className='alert alert-success'>
        <label style={{marginRight: '1rem'}}>Currency: </label>
        <select class="form-controll," id="inputCurrencySelect" onChange={ handleCurrencyChange }>
            <option defaultValue value="£" name="£ Pound">£ Pound</option>
            <option value="$" name="$ Dollar">$ Dollar</option>
            
            <option value="€" name="€ Euro">€ Euro</option>
            <option value="₹" name="₹ Rupee">₹ Rupee</option>
        </select>
        </div>
    );
};

export default Currency;