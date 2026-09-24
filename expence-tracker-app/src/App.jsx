
import { useState,useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

    const [currentPage, setCurrentPage] = useState("login");

    const [expenses,setExpenses] = useState(()=>{
      const savedExpenses = localStorage.getItem("expenses");

      return savedExpenses?JSON.parse(savedExpenses):[];

    });

    useEffect(()=>{
      localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
      );
    },[expenses]);

    return (
        <>
            {currentPage === "login" && (
                <Login setCurrentPage={setCurrentPage} />
            )}

            {currentPage === "dashboard" && (
                <Dashboard expenses={expenses} setExpenses={setExpenses}/>
            )}
        </>
    );
}

export default App;