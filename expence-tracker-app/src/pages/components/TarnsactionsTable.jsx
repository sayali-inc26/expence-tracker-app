import edit from "../../assets/edit.png";
import deleteButton from "../../assets/deleteButton.png";
// import drink from "../../assets/drink.png";
// import education from "../../assets/education.png";
// import income from "../../assets/income.png";
// import housing from "../../assets/housing.png";
// import groceries from "../../assets/groceries.png";
// import starbucks from "../../assets/starbucks.png";
// import university from "../../assets/university.png";
// import allowance from "../../assets/allowance.png";
// import rent from "../../assets/rent.png";
// import shopping from "../../assets/shopping.png"

import "./TransactionsTable.css"

function TransactionsTable({ expenses, setExpenses }) {
    // const transactions = [
    //     {
    //         id: 1,
    //         date: "Oct 24, 2024",
    //         merchant: "Starbucks Coffee",
    //         categoryIcon:starbucks,
    //         category: drink,
    //         amount: "₹650"
    //     },
    //     {
    //         id: 2,
    //         date: "Oct 23, 2024",
    //         merchant: "University Book Store",
    //         categoryIcon:university,
    //         category: education,
    //         amount: "₹1,250"
    //     },
    //     {
    //         id: 3,
    //         date: "Oct 22, 2024",
    //         merchant: "Monthly Allowance",
    //         categoryIcon:allowance,
    //         category: income,
    //         amount: "₹800"
    //     },
    //     {
    //         id: 4,
    //         date: "Oct 20, 2024",
    //         merchant: "Monthly Rent",
    //         categoryIcon:rent,
    //         category:housing,
    //         amount: "₹3000"
    //     },
    //     {
    //         id: 5,
    //         date: "Oct 19, 2024",
    //         merchant: "Whole Foods Market",
    //         categoryIcon:shopping,
    //         category: groceries,
    //         amount: "₹45.20"
    //     },
    //     {
    //         id: 6,
    //         date: "Oct 22, 2024",
    //         merchant: "Monthly Allowance",
    //         categoryIcon:allowance,
    //         category: income,
    //         amount: "₹800"
    //     },
    //     {
    //         id: 7,
    //         date: "Oct 20, 2024",
    //         merchant: "Monthly Rent",
    //         categoryIcon:rent,
    //         category:housing,
    //         amount: "₹3000"
    //     },
    //     {
    //         id: 8,
    //         date: "Oct 19, 2024",
    //         merchant: "Whole Foods Market",
    //         categoryIcon:shopping,
    //         category: groceries,
    //         amount: "₹45.20"
    //     }
    // ];

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this expense?"
        );

        if (!confirmDelete) {
            return;
        }

        setExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
        );
    };


    const handleEdit = (expense) => {
        const newTitle = window.prompt(
            "Enter expense name:",
            expense.title
        );

        if (newTitle === null) return;

        const newAmount = window.prompt(
            "Enter amount:",
            expense.amount
        );

        if (newAmount === null) return;

        const newCategory = window.prompt(
            "Enter category:",
            expense.category
        );

        if (newCategory === null) return;

        setExpenses((prevExpenses) =>
            prevExpenses.map((item) =>
                item.id === expense.id
                    ? {
                        ...item,
                        title: newTitle,
                        amount: Number(newAmount),
                        category: newCategory
                    }
                    : item
            )
        );
    };


    return (
        <>
            <table>

                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Merchant</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        expenses?.map((expense) => (

                            <tr key={expense.id}>

                                <td>{new Date(expense.id).toLocaleDateString()}</td>

                                <td>
                                    <div>
                                        {expense.title}
                                    </div>
                                </td>

                                <td>{expense.category}</td>

                                <td>₹{expense.amount}</td>

                                <td>
                                    <div>
                                        <img
                                            src={edit}
                                            alt="edit button"
                                            onClick={() =>
                                                handleEdit(expense)
                                            }
                                            className="actionButton"
                                        />
                                        <img
                                            src={deleteButton}
                                            alt="delete button"
                                            onClick={() =>
                                                handleDelete(expense.id)
                                            }
                                            className="actionButton"
                                        />
                                    </div>
                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>
        </>
    )
}

export default TransactionsTable;