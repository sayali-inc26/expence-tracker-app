
const API_URL = "http://192.168.1.81:8080/api/v1";

export const createCategory = async (
    name,
    icon,
    color,
    type
) => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    const newCategory = {
        name: name,
        icon: icon,
        color: color,
        type: type
    };

    console.log("Sending category:", newCategory);

    try {

        const response = await fetch(
            `${API_URL}/categories`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify(newCategory)
            }
        );

        const data = await response.json();

        console.log("Category response:", data);

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to create category"
            );
        }

        return data;

    } catch (error) {

        console.error(
            "Categories error:",
            error
        );

        throw error;
    }
};



export const getCategories = async () => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    try {

        const response = await fetch(
            `${API_URL}/categories`,
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log("Categories response:", data);

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to get categories"
            );
        }


        if (Array.isArray(data)) {

            return data;

        }

        if (Array.isArray(data.data)) {

            return data.data;

        }

        if (Array.isArray(data.categories)) {

            return data.categories;

        }

        if (Array.isArray(data.content)) {

            return data.content;

        }


        console.error(
            "Category array not found in response:",
            data
        );

        throw new Error(
            "Invalid categories response from server"
        );

    } catch (error) {

        console.error(
            "Get categories error:",
            error
        );

        throw error;
    }
};

export const deleteCategory = async (id) => {

    const token = localStorage.getItem("sessionToken");

    if (!token || token === "undefined") {
        throw new Error("Session expired. Please login again.");
    }

    try {

        const response = await fetch(
            `${API_URL}/categories/${id}`,
            {
                method: "DELETE",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log(
            "Delete category response:",
            data
        );

        if (!response.ok) {
            throw new Error(
                data?.message ||
                "Failed to delete category"
            );
        }

        return data;

    } catch (error) {

        console.error(
            "Delete category error:",
            error
        );

        throw error;
    }
};

