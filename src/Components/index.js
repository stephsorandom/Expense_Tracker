import React, { useEffect, useState } from 'react';
import Home from './Home';
import Transactions from './Transactions'

function Index(props) {
    const [transaction, updateTransaction] = useState([]);
    const [expensez, updateExpense] = useState(0)
    const [incomez, updateIncome] = useState(0)

    const addTransaction = (payload) => {
        const transactionArray = [...transaction]
        transactionArray.push(payload)
        updateTransaction(transactionArray)
    }

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transaction.map((payload) => {
            payload.type === 'EXPENSE'? 
            (exp = exp + payload.amount) : 
            (inc = inc + payload.amount) 
        });
        updateExpense(exp)
        updateIncome(inc)
    }
useEffect(() => calculateBalance(), [transaction])

    return (
        <div className='App'>
            <Home addTransaction={addTransaction} expense={expensez} income={incomez}/>
            <Transactions transaction={transaction}/>
        </div>
    );
}

export default Index;