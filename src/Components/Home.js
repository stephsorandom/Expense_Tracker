import React, { useState } from 'react';
import '../index.css';

const TransactionView = () => {
    return (
        <div className='addView'>
            <input placeholder='Amount' />
            <input placeholder='Description' />
            <div className='radioBtn'>
                <input type='radio' id='expense' name='type' value='EXPENSE' />
                <label htmlfor='expense'>Expense</label>

                <input type='radio' id='income' name='type' value='EXPENSE' />
                <label htmlfor='income'>Income</label>
            </div>
        </div>
        
    )
}

function Home(props) {
    const [addTransactVisable, toggleAddVisable] = useState(true)
    return (
        <div className='balanceContainer'>
            <div className='balanceBox'><span>Balance: $10000</span>
                <button className='addTransaction'>{addTransactVisable ? 'CANCEL' : 'ADD'}</button>
            </div>
            <div><TransactionView /></div>
        </div>
    );

}

export default Home;