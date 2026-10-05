// import { useState, useEffect } from "react";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";

// import { getCategories } from "./utils/categories";

// function App() {

//     const [currentPage, setCurrentPage] = useState("login");

//     const [expenses, setExpenses] = useState(() => {

//         const savedExpenses = localStorage.getItem("expenses");

//         return savedExpenses
//             ? JSON.parse(savedExpenses)
//             : [];

//     });

//     // CATEGORY STATE
//     const [categories, setCategories] = useState([]);

//     // SAVE EXPENSES
//     useEffect(() => {

//         localStorage.setItem(
//             "expenses",
//             JSON.stringify(expenses)
//         );

//     }, [expenses]);


//     // GET CATEGORIES FROM BACKEND
//     useEffect(() => {

//         const loadCategories = async () => {

//             try {

//                 const data = await getCategories();

//                 console.log(
//                     "Categories loaded in App:",
//                     data
//                 );

//                 setCategories(data);

//             } catch (error) {

//                 console.error(
//                     "Failed to load categories:",
//                     error
//                 );

//             }

//         };

//         loadCategories();

//     }, []);


//     return (
//         <>

//             {currentPage === "login" && (
//                 <Login
//                     setCurrentPage={setCurrentPage}
//                 />
//             )}


//             {currentPage === "signup" && (
//                 <Signup
//                     setCurrentPage={setCurrentPage}
//                 />
//             )}


//             {currentPage === "dashboard" && (
//                 <Dashboard
//                     expenses={expenses}
//                     setExpenses={setExpenses}
//                     categories={categories}
//                     setCategories={setCategories}
//                 />
//             )}

//         </>
//     );
// }

// export default App;

import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import { getCategories } from "./utils/categories";

function App() {

    const [currentPage, setCurrentPage] = useState("login");


    /* ==========================================
       EXPENSE STATE
    ========================================== */

    const [expenses, setExpenses] = useState(() => {

        const savedExpenses =
            localStorage.getItem("expenses");

        return savedExpenses
            ? JSON.parse(savedExpenses)
            : [];

    });


    /* ==========================================
       EDITING EXPENSE
       
       null = normal Add Expense
       object = Edit Expense
    ========================================== */

    const [editingExpense, setEditingExpense] =
        useState(null);


    /* ==========================================
       CATEGORY STATE
    ========================================== */

    const [categories, setCategories] =
        useState([]);


    /* ==========================================
       SAVE EXPENSES
    ========================================== */

    useEffect(() => {

        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );

    }, [expenses]);


    /* ==========================================
       GET CATEGORIES
    ========================================== */

    useEffect(() => {

        const loadCategories = async () => {

            try {

                const data = await getCategories();

                console.log(
                    "Categories loaded in App:",
                    data
                );

                setCategories(data);

            } catch (error) {

                console.error(
                    "Failed to load categories:",
                    error
                );

            }

        };

        loadCategories();

    }, []);


    return (
        <>

            {/* LOGIN */}

            {currentPage === "login" && (
                <Login
                    setCurrentPage={setCurrentPage}
                />
            )}


            {/* SIGNUP */}

            {currentPage === "signup" && (
                <Signup
                    setCurrentPage={setCurrentPage}
                />
            )}


            {/* DASHBOARD */}

            {currentPage === "dashboard" && (
                <Dashboard

                    expenses={expenses}
                    setExpenses={setExpenses}

                    categories={categories}
                    setCategories={setCategories}

                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                    editingExpense={editingExpense}
                    setEditingExpense={setEditingExpense}

                />
            )}

        </>
    );
}

export default App;