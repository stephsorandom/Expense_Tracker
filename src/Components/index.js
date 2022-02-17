import React, { useState } from 'react';
import Home from './Home';
import Transactions from './Transactions'

function Index(props) {
    const [transaction, updateTransaction] = useState([])

    const addTransaction = (payload) => {
        const transactionArray = [...transaction]
        transactionArray.push(payload)
        updateTransaction(transactionArray)
    }
    return (
        <div className='App'>
            <Home addTransaction={addTransaction} />
            <Transactions transaction={transaction}/>
        </div>
    );
}

export default Index;