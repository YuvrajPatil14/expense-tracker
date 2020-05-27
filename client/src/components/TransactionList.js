import React, { useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  //console.log(contex);
useEffect(()=>{
  getTransactions();
},[])
  return (
    <div className="transaction">
      <h3>Transactions</h3>
      <hr />
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
