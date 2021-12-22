import React, {useState} from "react";
import "./assets/style.css"
import NavBar from "./components/navbar";
import PageContainer from "./components/todo/pagecontainer.jsx";
import CardsContainer from "./components/todo/cardscontainer.jsx";
import Creator from "./components/todo/creator.jsx";
import Expenses from "./components/tracker/expenses";
import AddTrans from "./components/tracker/addtrans";
import {
  BrowserRouter,
  Routes as Switch,
  Route
} from "react-router-dom";


function App() {
  let flag = false;
    if(!localStorage.getItem('todos'))
      localStorage.setItem("todos", JSON.stringify([]));
    if(!localStorage.getItem('amount'))
      localStorage.setItem("amount", JSON.stringify(0));
    if(!localStorage.getItem('trans'))
      localStorage.setItem("trans", JSON.stringify([]));
    if(localStorage.getItem('here'))
      flag = true


      const [todoState, setTodo] = useState(JSON.parse(localStorage.getItem("todos")));
      const [amountState, setamount] = useState(JSON.parse(localStorage.getItem("amount")));
      const [transState, setTrans] = useState(JSON.parse(localStorage.getItem("trans")));

  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
      <Route exact path = "/" element={
          <PageContainer appname = "To Do">
            <Creator data = {todoState} setter = {setTodo} />
            <CardsContainer data = {todoState} setter = {setTodo} />
          </PageContainer>} />
        <Route path="/tracker" element = {
        <PageContainer appname = "Expense Tracker">
          <AddTrans setTrans={setTrans} setamount={setamount} data = {transState} amountState = {amountState}/> 
          <Expenses amountState = {amountState} setamount={setamount} data = {transState} setTrans = {setTrans}  />
        </PageContainer>} />
      </Switch>
    </BrowserRouter>



  );
}

export default App;
