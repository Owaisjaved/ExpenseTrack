import React,{ createContext,useReducer }  from 'react'
import AppReducer from './AppReducer';


const initialState={
    transaction:[
      
    ]
}

//Create Context

export const GlobalContext=createContext(initialState);

//Provider component

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

//Action
function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'add_TRANSACTION',
      payload: transaction
    });
  }

    return (
    <GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
);

}