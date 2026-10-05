
export const signup = async (userName, email, password) => {

    const userData = {
        username: userName,
        email: email,
        password: password
    };

    try {

        const response = await fetch("http://192.168.1.81:8080/api/v1/auth/signup", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)

        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
                errorData?.message || "Failed to create account"
            );
        
        }

        const data = await response.json();

        console.log("------------------User created:", data);

        return data;

    } catch (error) {

        console.error("Signup Error:", error);

        throw error;
    }
};

