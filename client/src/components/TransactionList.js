import React, { useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  //console.log(contex);
useEffect(()=>{
  getTransactions();
},[])

let disp=(<h4 style={{'color':'#999'}}>Start adding expenses...</h4>);
if(transactions.length !== 0)
{
  disp = (
    <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
  )
}

  return (
    <div className="transaction">
      <h3>Transactions</h3>
      <hr />
      {disp}
    </div>
  );
};
