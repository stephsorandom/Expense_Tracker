import React, { useState } from 'react';
import '../index.css';

const TransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [descrip, setDescrip] = useState();
    const [type, setType] = useState('EXPENSE'); //preselects expense
    
    const addTransaction = () => {
        props.addTransaction({
            amount:Number(amount), 
            descrip, 
            type, 
            id:Date.now()})
        console.log(amount, descrip, type)
        props.toggleAddVisable()
    }
    
    return (
        <div className='addView'>
                <input 
                    placeholder='Amount' 
                    value={amount} 
                    type='number'
                    onChange={(e) => setAmount(e.target.value)}/>
                <input 
                    placeholder='Description'
                    value={descrip}
                    onChange={(e) => setDescrip(e.target.value)} />
            <div className='radioBtn'>
                <input 
                    type='radio' 
                    id='expense' 
                    name='type' 
                    value='EXPENSE' 
                    checked={type === 'EXPENSE'} 
                    onChange={(e) => setType(e.target.value)}
                    />

                <label htmlFor='expense'>Expense</label>

                <input 
                    type='radio' 
                    id='income' 
                    name='type' 
                    value='INCOME'
                    checked={type === 'INCOME'}
                    onChange={(e) => setType(e.target.value)} />
                <label htmlFor='income'>Income</label>
            </div>
            <button onClick={addTransaction} className='addTransaction'>ADD TRANSACTION</button>
        </div> 
    )
}

const Home = (props) => {
    const [addTransactVisable, toggleAddVisable] = useState(false) //renders on off
    return (
        <div className='balanceContainer'>
            <div className='balanceBox'>
                <span>Balance: $10000</span>
                <button className='addTransaction' onClick={() => toggleAddVisable(!addTransactVisable)}> 
                    {addTransactVisable ? 'CANCEL' : 'ADD'}
                </button>
            </div>
            {addTransactVisable && 
            (<TransactionView 
            toggleAddVisable={toggleAddVisable}
                addTransaction={props.addTransaction}
            />)}
        </div>
    );

}

export default Home;