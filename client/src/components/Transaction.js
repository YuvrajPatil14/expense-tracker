import React, {useContext} from 'react'
import{GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    console.log(transaction);
    const sign = transaction.amount <0 ? '-':'+';
    return (
        <li className={transaction.amount<0? 'minus':'plus'}
        onClick={()=>deleteTransaction(transaction._id)}
        >
           
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            {/* <button className="delete" onClick={()=>deleteTransaction(transaction.id)}> X </button> */}
          </li>
    )
}
