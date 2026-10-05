import { useEffect } from "react";

import "./TransactionsPage.css"
import TransactionsTable from "./components/TarnsactionsTable"
import { getTransactions } from "../utils/transactions";

function TransactionsPage({ expenses,setCurrentPage,setExpenses,setEditingExpense}) {

    useEffect(() => {

        const loadTransactions = async () => {

            try {

                const data = await getTransactions();

                console.log(
                    "=========================================Transactions from backend:",
                    data
                );

                setExpenses(data);

            } catch (error) {

                console.error(
                    "Failed to load transactions:",
                    error
                );

                alert(
                    error.message ||
                    "Failed to load transactions"
                );
            }
        };

        loadTransactions();

    }, [setExpenses]);

     const handleAddExpense = () => {
        setCurrentPage("Add Expense");
    };
    return (
        <>
            <div className="transactionMainContent">
                <div className="mainHeading">
                    <div>
                        <h3>Transactions</h3>
                        <p>View and manage your detailed spending history.</p>
                    </div>

                    <button onClick={handleAddExpense}>Add New Expenses</button>
                </div>

                <div className="searchSection">
                    <div className="searchSectionItem">
                        <label>Search Merchant or Note</label>
                        <input type="text" placeholder="e.g. Starbucks" className="noteInput" />
                    </div>

                    <div className="searchSectionItem">
                        <label>Date Range</label>
                        <input type="text" placeholder="Last 30 Days" />
                    </div>

                    <div className="searchSectionItem">
                        <label>Category</label>
                        <input type="text" placeholder="All Categories" />
                    </div>

                    <div className="searchSectionItem">
                        <button>Download CSV</button>
                    </div>
                </div>

                <div className="all-transactions">

                    <TransactionsTable expenses={expenses} setExpenses={setExpenses}  setCurrentPage={setCurrentPage}

                setEditingExpense={
                    setEditingExpense
                }/>

                </div>
            </div>
        </>
    )
}

export default TransactionsPage;