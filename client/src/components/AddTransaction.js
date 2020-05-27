import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e)=>{
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }
    console.log('called');
    
    addTransaction(newTransaction)
    
  }

  return (
    <div className="addTransaction">
      <h3>Add new transaction</h3>
      <hr />
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="Text">Text</label>
          <br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="Amount">
            Amount
            <br />
            (Negative -expense, positve-income)
          </label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter amount.."
          />
          <br />
          <button className="addTx" >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
