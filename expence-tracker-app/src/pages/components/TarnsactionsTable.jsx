import edit from "../../assets/edit.png";
import deleteButton from "../../assets/deleteButton.png";

import {
    updateTransaction,
    deleteTransaction
} from "../../utils/transactions";

import { useNavigate } from "react-router-dom";

import "./TransactionsTable.css";

function TransactionsTable({ expenses, setExpenses, setCurrentPage,
    setEditingExpense }) {

    const navigate = useNavigate();

    const handleEdit = (expense) => {

        console.log(
            "Editing expense:",
            expense
        );

        setEditingExpense(expense);

        setCurrentPage("Add Expense");
    };


    /* ==========================================
       DELETE TRANSACTION
    ========================================== */

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this expense?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await deleteTransaction(id);

            setExpenses((previousExpenses) =>
                previousExpenses.filter(
                    (expense) => expense.id !== id
                )
            );

        } catch (error) {

            console.error(
                "Failed to delete transaction:",
                error
            );

            alert(
                error.message ||
                "Failed to delete transaction"
            );
        }
    };


    return (
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

                {expenses?.map((expense) => (

                    <tr key={expense.id}>

                        {/* Date */}
                        <td>
                            {
                                expense.transactionDate
                                    ? new Date(
                                        expense.transactionDate
                                    ).toLocaleDateString()
                                    : "-"
                            }
                        </td>


                        {/* Merchant */}
                        <td>
                            {expense.merchant || "-"}
                        </td>


                        {/* Category */}
                        <td>
                            {expense.category?.name || "-"}
                        </td>


                        {/* Amount */}
                        <td>
                            ₹{expense.amount}
                        </td>


                        {/* Actions */}
                        <td>

                            <div>

                                <img
                                    src={edit}
                                    alt="edit button"
                                    className="actionButton"
                                    onClick={() =>
                                        handleEdit(expense)
                                    }
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

                ))}

            </tbody>

        </table>
    );
}

export default TransactionsTable;