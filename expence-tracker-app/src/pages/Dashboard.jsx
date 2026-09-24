import { useEffect, useState } from "react";

import "./Dashboard.css";
import DashboardPage from "./DashboardPage";
import AddExpense from "./AddExpenses";
import CategoryPage from "./CategoryPage"
import TransactionsPage from "./TransactionsPage";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import NewCategoryPage from "./NewCategoryPage";

function Dashboard({expenses,setExpenses}) {
    const [currentPage, setCurrentPage] = useState("Dashboard");
    
    const [categories,setCategories]=useState(()=>{
        const savedCategories = localStorage.getItem("categories");
        return savedCategories?JSON.parse(savedCategories):[];
    });

    useEffect(()=>{
        localStorage.setItem(
            "categories",
            JSON.stringify(categories)
        );
    },[categories])

    return (
        <>
            <div className="dashboard">
                <Sidebar setCurrentPage={setCurrentPage}/>
                <div className="rightSide">

                    <SearchBar/>

                    <div className="mainContent">
                        {currentPage ==="Dashboard" && (<DashboardPage expenses ={expenses}/>)}
                        {currentPage ==="Add Expense" && (<AddExpense expenses ={expenses} setExpenses={setExpenses}/>)}
                        {currentPage ==="Transactions" && (<TransactionsPage expenses ={expenses} setExpenses={setExpenses} setCurrentPage={setCurrentPage}/>) }
                        {currentPage ==="Categories" && (<CategoryPage categories ={categories} setCategories={setCategories} setCurrentPage={setCurrentPage}/>)}
                        {currentPage ==="New Category" && (<NewCategoryPage categories ={categories} setCategories={setCategories}/>) }
                    </div>

                </div>
            

            </div>
        </>
    )
}

export default Dashboard;