import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';
const initialState = {
  transactions: [
    {
    text:'dummy',
    _id:12131,
    amount:-100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
    {
    text:'dummy2',
    _id:12131,
    amount:100
  },
],
  error:null,
  loading:true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions(){
    try{

      const res = await axios.get('/api/v1/transactions')
      //console.log(res);
      
      dispatch({
        type:"GET_TRANSACTIONS",
        payload:res.data.data
      })

    }catch(e){
      dispatch({
        type:"TRANSACTION_ERROR",
        payload:e.response.data.error
      })
      
    }
  }


 async function deleteTransaction(id) {
   try{
      await axios.delete(`/api/v1/transactions/${id}`)
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
   }catch(e){
     console.log(e);
     
     dispatch({
      type:"TRANSACTION_ERROR",
      payload:e.response.data.error
    })
   }
    
  }
  async function addTransaction(transaction) {
    //console.log('dis');
    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }
    try{
      const res = await axios.post('api/v1/transactions',transaction,config)
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });

    }catch(e){
      dispatch({
        type:"TRANSACTION_ERROR",
        payload:e.response.data.error
      })
    }
    
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error:state.error,
        loading:state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
