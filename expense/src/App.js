import React from 'react';
import Header from './component/Header'
import './App.css';
import Balance from './component/Balance';
import { IncomeExpense } from './component/IncomeExpense';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="conatiner">
<Balance/>
<IncomeExpense/>
<TransactionList/>
<AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
