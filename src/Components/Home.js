import React, {useState} from 'react';
import '../index.css'

const TransactionView = () => {
    return (
        <div className='addView'>
            <input placeholder='Amount' />
            <input placeholder='Description' />
        </div>
        
    )
}

function Home(props) {
    const [addTransactVisable, toggleAddVisable] = useState(true)
    return (
        <div className='balanceContainer'>
            <div className='balanceBox'><span>Balance: $10000</span>
           <button className='addTransaction'>{addTransactVisable ? 'CANCEL' : 'ADD'}</button></div>
           
           <div><TransactionView /></div>
           
        </div>
    );
    
}

export default Home;