import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import "./AddExpenses.css";

import { transactions, updateTransaction } from "../utils/transactions";


function AddExpenses({ expenses, setExpenses, categories,editingExpense,
    setEditingExpense,
    setCurrentPage }) {

    const location = useLocation();
    const navigate = useNavigate();

    const editingExpense = location.state?.expense;
    const isEditMode = Boolean(editingExpense);

    const [merchant, setMerchant] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("EXPENSE");
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        if (editingExpense) {

            console.log(
                "Prefilling edit form:",
                editingExpense
            );


            setMerchant(
                editingExpense.merchant || ""
            );


            setAmount(
                editingExpense.amount?.toString() || ""
            );


            setType(
                editingExpense.type || "EXPENSE"
            );

            const existingCategoryId = editingExpense.categoryId || editingExpense.category?.id || "";

            setCategoryId(existingCategoryId.toString());

            setDescription(editingExpense.description || "");

        } else {
            clearForm();
        }

    }, [editingExpense]);


    const clearForm = () => {

        setMerchant("");
        setAmount("");
        setType("EXPENSE");
        setCategoryId("");
        setDescription("");
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (merchant.trim() === "" || amount === "" || type === "" || categoryId === "") {

            alert("Please fill all required fields");

            return;
        }
        try {

            let response;

            if (isEditMode) {

                console.log( "Updating transaction:",editingExpense.id );

                response = await updateTransaction( editingExpense.id,merchant,amount,type,categoryId,description,editingExpense.transactionDate);

                console.log("Updated transaction:",response);

                setExpenses((previousExpenses) =>

                    previousExpenses.map(
                        (expense) =>

                            expense.id === editingExpense.id
                                ? {
                                    ...expense,
                                    ...response,

                                    merchant,
                                    amount: Number(amount),
                                    type,
                                    description,
                                    categoryId: Number(categoryId)
                                }: expense
                    )
                );

                alert("Expense updated successfully!");

                navigate(-1);

            }else {

                console.log("Creating new transaction");

                response = await transactions(merchant,amount,type,categoryId,description);

                console.log( "New transaction:",response);

                setExpenses((previousExpenses) => [
                    ...previousExpenses,
                    response
                ]);


                clearForm();


                alert(
                    "Expense added successfully!"
                );

            }


        } catch (error) {

            console.error(
                "Failed to save transaction:",
                error
            );


            alert(
                error.message ||
                "Failed to save transaction"
            );

        }

    };


    /* ==========================================
       CANCEL
    ========================================== */

    const handleCancel = () => {

        if (isEditMode) {

            /*
             * If editing, go back to the
             * previous page.
             */

            navigate(-1);

        } else {

            /*
             * Normal Add Expense:
             * simply clear the form.
             */

            clearForm();

        }

    };


    return (

        <div className="mainContent">


            {/* ==================================
                PAGE TITLE
            ================================== */}

            <h1>
                {isEditMode
                    ? "Edit Expense"
                    : "Add New Expense"
                }
            </h1>


            <h3>

                {isEditMode
                    ? "Update the details of your expense."
                    : "Keep track of your academic and personal spending to stay on budget."
                }

            </h3>


            <div className="formContent">


                <form onSubmit={handleSubmit}>


                    {/* ==================================
                        MERCHANT
                    ================================== */}

                    <div className="inputGroup">

                        <label>
                            Expense Title
                        </label>

                        <input
                            type="text"
                            placeholder="e.g., Monthly Grocery, Stationery"

                            value={merchant}

                            onChange={(event) =>
                                setMerchant(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* ==================================
                        AMOUNT
                    ================================== */}

                    <div className="inputGroup">

                        <label>
                            Amount (₹)
                        </label>

                        <input
                            type="number"
                            placeholder="₹ 0.00"

                            value={amount}

                            onChange={(event) =>
                                setAmount(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* ==================================
                        TYPE
                    ================================== */}

                    <div className="inputGroup">

                        <label>
                            Type
                        </label>

                        <select
                            value={type}

                            onChange={(event) =>
                                setType(
                                    event.target.value
                                )
                            }
                        >

                            <option value="EXPENSE">
                                Expense
                            </option>

                            <option value="INCOME">
                                Income
                            </option>

                        </select>

                    </div>


                    {/* ==================================
                        CATEGORY
                    ================================== */}

                    <div className="inputGroup">

                        <label>
                            Category
                        </label>

                        <select
                            value={categoryId}

                            onChange={(event) =>
                                setCategoryId(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Select Category
                            </option>


                            {categories?.map(
                                (category) => (

                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>

                                )
                            )}

                        </select>

                    </div>


                    {/* ==================================
                        DESCRIPTION
                    ================================== */}

                    <div className="inputGroup">

                        <label>
                            Description (Optional)
                        </label>

                        <input
                            type="text"

                            placeholder="Add some notes about this expense..."

                            className="description"

                            value={description}

                            onChange={(event) =>
                                setDescription(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* ==================================
                        BUTTONS
                    ================================== */}

                    <div className="expenseButtons">

                        <button
                            type="submit"
                            className="saveExpenseButton"
                        >

                            {isEditMode
                                ? "Update Expense"
                                : "Save Expense"
                            }

                        </button>


                        <button
                            type="button"
                            className="cancelButton"

                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>


            {/* ==================================
                PRO TIP
            ================================== */}

            {!isEditMode && (

                <div className="proTip">

                    <h3>
                        Pro Tip
                    </h3>

                    <h4>
                        Categorizing your expenses correctly
                        helps the Academic Budget Planner provide
                        better insights for your semester spending.
                    </h4>

                </div>

            )}

        </div>
    );
}


export default AddExpenses;