
import { useState } from "react";
import "./AddExpenses.css"
// import "./Login.css";

function AddExpenses({ expenses, setExpenses }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Title:", title);
        console.log("Amount:", amount);
        console.log("Category:", category);
        console.log("Description:", description);

        const newExpense = {
            id: Date.now(),
            title: title,
            amount: amount,
            category: category,
            description: description
        };

        setExpenses([
            ...expenses,
            newExpense
        ])

        setTitle("");
        setAmount("");
        setCategory("");
        setDescription("");
    };

    const handleCancel = () => {
        setTitle("");
        setAmount("");
        setCategory("");
        setDescription("");
    };

    return (
        <>
            <div className="mainContent">
                <h1>Add New Expense</h1>
                <h3>Keep track of your academic and personal spending to stay on budget.</h3>
                <div className="formContent">

                    <form onSubmit={handleSubmit}>

                        <div className="inputGroup">

                            <label>Expense Title</label>

                            <input type="text" placeholder="e.g., Monthly Grocery, Stationery" value={title} onChange={(event) => setTitle(event.target.value)} />

                        </div>

                        <div className="inputGroup">

                            <label>Amount (₹)</label>

                            <input type="number" placeholder="₹ 0.00" value={amount} onChange={(event) => { setAmount(event.target.value) }} />

                        </div>
                        <div className="inputGroup">

                            <label>Category</label>

                            <input type="text" placeholder="Select Category" value={category} onChange={(event) => setCategory(event.target.value)} />

                        </div>
                        <div className="inputGroup">

                            <label>Description (Optional)</label>

                            <input type="text" placeholder="Add some notes about this expense..." className="description" value={description} onChange={(event) => setDescription(event.target.value)} />

                        </div>



                        <div className="expenseButtons">
                            <button type="submit" className="saveExpenseButton">Save Expenses</button>
                            <button type="submit" className="cancelButton" onClick={handleCancel}>Cancel</button>

                        </div>
                    </form>

                </div>

                <div className="proTip">
                    <h3>Pro Tip</h3>
                    <h4>Categorizing your expenses correctly helps the Academic Budget Planner
                        provide better insights for your semester spending.</h4>

                </div>
            </div>
        </>
    )
}
export default AddExpenses;