import React from 'react';

const TransactionArea = (props) => {
    return(
        <div className='transactionCell' isExpense={props.payload?.type === 'EXPENSE'}>
            <span id='transCell'>
                {props.payload.descrip}
            </span>
            <span id='transCell'>
                ${props.payload.amount}
                </span>
        </div>
    )
}

function Transactions(props) {
    return (
        <div className='transactionContainer'>
            <p>Transaction</p>
            <input placeholder='Search' />
            {props.transaction?.length ?
             props.transaction.map((payload) =>(<TransactionArea payload={payload} />)) 
             : ''}
        </div>
    );
}

export default Transactions;