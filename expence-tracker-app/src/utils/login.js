
const API_URL = "http://192.168.1.81:8080/api/v1";

// export const loginUser = async (userName, password, rememberMe) => {

//     const userData = {
//         username: userName,
//         password: password,
//         rememberMe: rememberMe
//     };

//     try {

//         const response = await fetch(
//             `${API_URL}/auth/signin`,
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify(userData)
//             }
//         );

//         const data = await response.json();

//         console.log("Login Response:", data);

//         if (!response.ok) {
//             throw new Error(
//                 data.message || "Login failed"
//             );
//         }

//         // Save session token
//         localStorage.setItem(
//             "sessionToken",
//             data.sessionToken
//         );

//         return data;

//     } catch (error) {

//         console.error("Login Error:", error);

//         throw error;
//     }
// };



export const loginUser = async (userName, password, rememberMe) => {

    const userData = {
        username: userName,
        password: password,
        rememberMe: rememberMe
    };

    try {

        const response = await fetch(
            `${API_URL}/auth/signin`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(userData)
            }
        );

        const data = await response.json();

        console.log("Login Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message || "Login failed"
            );
        }

        // Backend response:
        // data.data.sessionToken

        const sessionToken = data?.data?.sessionToken;

        if (!sessionToken) {
            throw new Error("Session token was not returned by server");
        }

        // Save session information
        localStorage.setItem(
            "sessionToken",
            sessionToken
        );

        localStorage.setItem(
            "tokenType",
            data?.data?.tokenType || "Bearer"
        );

        localStorage.setItem(
            "tokenExpiresAt",
            data?.data?.expiresAt || ""
        );

        // Optional: save user
        if (data?.data?.user) {
            localStorage.setItem(
                "user",
                JSON.stringify(data.data.user)
            );
        }

        console.log(
            "Session token saved:",
            sessionToken
        );

        return data;

    } catch (error) {

        console.error("Login Error:", error);

        throw error;
    }
};


// export const getCurrentUser = async () => {

//     try {

//         const token = localStorage.getItem("sessionToken");

//         if (!token) {
//             throw new Error("No session token found");
//         }

//         const response = await fetch(
//             `${API_URL}/auth/me`,
//             {
//                 method: "GET",

//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             }
//         );

//         const data = await response.json();

//         console.log("Current User:", data);

//         if (!response.ok) {
//             throw new Error(
//                 data.message || "Failed to get current user"
//             );
//         }

//         return data;

//     } catch (error) {

//         console.error("Get Current User Error:", error);

//         throw error;
//     }
// };


export const getCurrentUser = async () => {

    try {

        const token = localStorage.getItem("sessionToken");

        if (!token || token === "undefined") {
            throw new Error("No valid session token found");
        }

        console.log("Using session token:", token);

        const response = await fetch(
            `${API_URL}/auth/me`,
            {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        console.log("Current User:", data);

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to get current user"
            );
        }

        return data;

    } catch (error) {

        console.error("Get Current User Error:", error);

        throw error;
    }
};
