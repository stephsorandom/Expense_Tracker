import React, { useEffect, useState } from "react";



const TransactionArea = (props) => {
  return (
    <div
      className="transactionCell"
      isExpense={props.payload?.type === "EXPENSE"} 
    //   type={() => updateCellColor()}
    >
      <span id="transCell">{props.payload.descrip}</span>
      <span id="transCell">${props.payload.amount}</span>
    </div>
  );
};

function Transactions(props) {
    // const [cellColor, updateCellColor] = useState(props.payload?.type)
    const [searchTxt, updateSearchTxt] = useState('')
    const [filterTransaction, updateTxn] = useState(props.transaction)

    const filterData = () => {
        if (!searchTxt || ! searchTxt.trim().length) {
            updateTxn(props.transaction)
            return;
        }
        let txn = [...props.transaction]
        txn = txn.filter((payload) => payload.descrip.toLowerCase().includes(searchTxt.toLowerCase().trim())) 
        updateTxn(txn)
    }

    useEffect(() => filterData(searchTxt), [props.transaction])

    // const celltransactionColor = () => {
    //     if (cellColor === 'EXPENSE') {
    //         updateCellColor(StyleSheet.backgroundColor='green')
    //     } else {
    //       updateCellColor(StyleSheet.backgroundColor='red')
    //     }
    //     updateCellColor()
    // }

  return (
    <div className="transactionContainer">
      <p>Transaction</p>
        <input 
        placeholder="Search" 
        value={searchTxt} 
        onChange={(e) => {
            updateSearchTxt(e.target.value)
            filterData(e.target.value)
            }} />
      {filterTransaction?.length
        ? filterTransaction.map((payload) => (
            <TransactionArea payload={payload} />
          ))
        : ""}
    </div>
  );
}

export default Transactions;
