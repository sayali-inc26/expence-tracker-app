const API_URL = "http://192.168.1.81:8080/api/v1";

export const transactions = async (
    merchant,
    amount,
    type,
    categoryId,
    description
) => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    const transactionDate = new Date().toISOString();

    const userTransactions = {
        merchant: merchant,
        amount: Number(amount),
        type: type,
        categoryId: Number(categoryId),
        transactionDate: transactionDate,
        description: description
    };

    console.log("Sending transaction:", userTransactions);

    try {

        const response = await fetch(
            `${API_URL}/transactions`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify(userTransactions)
            }
        );

        const data = await response.json();

        console.log("Transaction response:", data);

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to create transaction"
            );
        }

        return data;

    } catch (error) {

        console.error(
            "Transactions error:",
            error
        );

        throw error;
    }
};

// export const getTransactions = async () => {

//     const token = localStorage.getItem("sessionToken");

//     if (!token || token === "undefined") {
//         throw new Error("Session expired. Please login again.");
//     }

//     try {

//         const response = await fetch(
//             `${API_URL}/transactions`,
//             {
//                 method: "GET",

//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             }
//         );

//         const data = await response.json();

//         console.log("Transactions response:", data);

//         if (!response.ok) {
//             throw new Error(
//                 data?.message ||
//                 "Failed to get transactions"
//             );
//         }

//         /*
//          * Depending on your backend response,
//          * transactions may be inside:
//          *
//          * data
//          * content
//          * transactions
//          */

//         if (Array.isArray(data)) {
//             return data;
//         }

//         if (Array.isArray(data.data)) {
//             return data.data;
//         }

//         if (Array.isArray(data.transactions)) {
//             return data.transactions;
//         }

//         if (Array.isArray(data.content)) {
//             return data.content;
//         }

//         console.error(
//             "Transaction array not found:",
//             data
//         );

//         throw new Error(
//             "Invalid transactions response from server"
//         );

//     } catch (error) {

//         console.error(
//             "Get transactions error:",
//             error
//         );

//         throw error;
//     }
// };
export const getTransactions = async () => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    try {

        const response = await fetch(
            `${API_URL}/transactions`,
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log("Transactions response:", data);

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to get transactions"
            );
        }

        // Backend response:
        // data.data.content = array of transactions

        if (
            data.data &&
            Array.isArray(data.data.content)
        ) {
            return data.data.content;
        }

        throw new Error(
            "Invalid transactions response from server"
        );

    } catch (error) {

        console.error(
            "Get transactions error:",
            error
        );

        throw error;
    }
};


// export const updateTransaction = async (
//     id,
//     merchant,
//     amount,
//     type,
//     categoryId,
//     description,
//     transactionDate
// ) => {

//     const token = localStorage.getItem("sessionToken");

//     if (!token || token === "undefined") {
//         throw new Error("Session expired. Please login again.");
//     }

//     const updatedTransaction = {
//         merchant: merchant,
//         amount: Number(amount),
//         type: type,
//         categoryId: Number(categoryId),
//         transactionDate: transactionDate,
//         description: description
//     };

//     console.log(
//         "Updating transaction:",
//         updatedTransaction
//     );

//     try {

//         const response = await fetch(
//             `${API_URL}/transactions/${id}`,
//             {
//                 method: "PUT",

//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },

//                 body: JSON.stringify(updatedTransaction)
//             }
//         );

//         const data = await response.json();

//         console.log(
//             "Update transaction response:",
//             data
//         );

//         if (!response.ok) {
//             throw new Error(
//                 data?.message ||
//                 "Failed to update transaction"
//             );
//         }

//         return data;

//     } catch (error) {

//         console.error(
//             "Update transaction error:",
//             error
//         );

//         throw error;
//     }
// };

export const updateTransaction = async (
    id,
    merchant,
    amount,
    type,
    categoryId,
    description,
    transactionDate
) => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error(
            "Session expired. Please login again."
        );
    }

    const updatedTransaction = {
        merchant: merchant,
        amount: Number(amount),
        type: type,
        categoryId: Number(categoryId),
        transactionDate: transactionDate,
        description: description
    };

    console.log(
        "Updating transaction:",
        updatedTransaction
    );

    try {

        const response = await fetch(
            `${API_URL}/transactions/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify(updatedTransaction)
            }
        );

        const data = await response.json();

        console.log(
            "Update transaction response:",
            data
        );

        if (!response.ok) {

            throw new Error(
                data?.message ||
                "Failed to update transaction"
            );

        }

        return data;

    } catch (error) {

        console.error(
            "Update transaction error:",
            error
        );

        throw error;
    }
};

export const deleteTransaction = async (id) => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    try {

        const response = await fetch(
            `${API_URL}/transactions/${id}`,
            {
                method: "DELETE",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        // Some DELETE APIs return no body
        let data = null;

        const text = await response.text();

        if (text) {
            data = JSON.parse(text);
        }

        console.log(
            "Delete transaction response:",
            data
        );

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to delete transaction"
            );
        }

        return data;

    } catch (error) {

        console.error(
            "Delete transaction error:",
            error
        );

        throw error;
    }
};