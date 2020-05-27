import React from "react";
import "./App.css";
import { Headers } from "./components/Headers";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Headers />
        <div className="container">
          <Balance />
          <Income />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
