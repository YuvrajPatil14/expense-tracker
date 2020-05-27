import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
export const Income = () => {
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
      .filter(amount=>amount > 0)
      .reduce((acc, val) => acc + val, 0)
      .toFixed(2);
    const expense=amounts
    .filter(amount=>amount < 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);;
    return (
        <div className="inc-exp-container">
            <div className="income">
            <h4>Income</h4>
            <p id="money-plus" className='money'>$ {income}</p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p id="money-minus" className="money">$ {Math.abs(expense)}</p>
            </div>
        </div>
    )
}
