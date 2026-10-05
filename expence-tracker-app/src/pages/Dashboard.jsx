// import { useEffect, useState } from "react";

// import "./Dashboard.css";
// import DashboardPage from "./DashboardPage";
// import AddExpense from "./AddExpenses";
// import CategoryPage from "./CategoryPage"
// import TransactionsPage from "./TransactionsPage";
// import Sidebar from "./components/Sidebar";
// import SearchBar from "./components/SearchBar";
// import NewCategoryPage from "./NewCategoryPage";

// function Dashboard({expenses,setExpenses,categories,
//     setCategories}) {
//     const [currentPage, setCurrentPage] = useState("Dashboard");

//     // const [categories,setCategories]=useState(()=>{
//     //     const savedCategories = localStorage.getItem("categories");
//     //     return savedCategories?JSON.parse(savedCategories):[];
//     // });

//     // useEffect(()=>{
//     //     localStorage.setItem(
//     //         "categories",
//     //         JSON.stringify(categories)
//     //     );
//     // },[categories])

//     return (
//         <>
//             <div className="dashboard">
//                 <Sidebar setCurrentPage={setCurrentPage}/>
//                 <div className="rightSide">

//                     <SearchBar/>

//                     <div className="mainContent">
//                         {currentPage ==="Dashboard" && (<DashboardPage expenses ={expenses}/>)}
//                         {currentPage ==="Add Expense" && (<AddExpense expenses ={expenses} setExpenses={setExpenses} categories={categories}/>)}
//                         {currentPage ==="Transactions" && (<TransactionsPage expenses ={expenses} setExpenses={setExpenses} setCurrentPage={setCurrentPage}/>) }
//                         {currentPage ==="Categories" && (<CategoryPage categories ={categories} setCategories={setCategories} setCurrentPage={setCurrentPage}/>)}
//                         {currentPage ==="New Category" && (<NewCategoryPage categories ={categories} setCategories={setCategories}/>) }
//                     </div>

//                 </div>


//             </div>
//         </>
//     )
// }

// export default Dashboard;
import { useState } from "react";

import "./Dashboard.css";

import DashboardPage from "./DashboardPage";
import AddExpense from "./AddExpenses";
import CategoryPage from "./CategoryPage";
import TransactionsPage from "./TransactionsPage";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import NewCategoryPage from "./NewCategoryPage";


function Dashboard({
    expenses,
    setExpenses,
    categories,
    setCategories
}) {

    const [currentPage, setCurrentPage] =
        useState("Dashboard");


    /*
     * null = adding new expense
     *
     * object = editing existing expense
     */

    const [editingExpense, setEditingExpense] =
        useState(null);


    /* ==========================================
       ADD NEW EXPENSE
    ========================================== */

    const handleAddExpense = () => {

        // Clear any previous edit data
        setEditingExpense(null);

        // Open Add Expense page
        setCurrentPage("Add Expense");
    };


    /* ==========================================
       EDIT EXPENSE
    ========================================== */

    const handleEditExpense = (expense) => {

        console.log(
            "Expense selected for editing:",
            expense
        );

        // Store selected expense
        setEditingExpense(expense);

        // Open Add Expense page
        setCurrentPage("Add Expense");
    };


    return (

        <div className="dashboard">


            {/* SIDEBAR */}

            <Sidebar
                setCurrentPage={setCurrentPage}
                onAddExpense={handleAddExpense}
            />


            <div className="rightSide">


                {/* HEADER */}

                <SearchBar />


                <div className="mainContent">


                    {/* DASHBOARD */}

                    {currentPage === "Dashboard" && (

                        <DashboardPage
                            expenses={expenses}
                        />

                    )}


                    {/* ADD / EDIT EXPENSE */}

                    {currentPage === "Add Expense" && (

                        <AddExpense

                            expenses={expenses}

                            setExpenses={setExpenses}

                            categories={categories}

                            editingExpense={
                                editingExpense
                            }

                            setEditingExpense={
                                setEditingExpense
                            }

                            setCurrentPage={
                                setCurrentPage
                            }

                        />

                    )}


                    {/* TRANSACTIONS */}

                    {currentPage === "Transactions" && (

                        <TransactionsPage

                            expenses={expenses}

                            setExpenses={setExpenses}

                            setCurrentPage={
                                setCurrentPage
                            }

                            setEditingExpense={
                                setEditingExpense
                            }

                            onEditExpense={
                                handleEditExpense
                            }

                        />

                    )}


                    {/* CATEGORIES */}

                    {currentPage === "Categories" && (

                        <CategoryPage

                            categories={categories}

                            setCategories={setCategories}

                            setCurrentPage={
                                setCurrentPage
                            }

                        />

                    )}


                    {/* NEW CATEGORY */}

                    {currentPage === "New Category" && (

                        <NewCategoryPage

                            categories={categories}

                            setCategories={setCategories}

                        />

                    )}

                </div>

            </div>

        </div>
    );
}

export default Dashboard;