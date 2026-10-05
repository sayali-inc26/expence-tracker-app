
const API_URL = "http://192.168.1.81:8080/api/v1";

export const googleLogin = async (googleData, rememberMe) => {

    try {

        const response = await fetch(`${API_URL}/auth/google`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                idToken: googleData.credential,
                rememberMe: rememberMe
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Google login failed");
        }

        // Save session token
        localStorage.setItem("sessionToken", data.sessionToken);

        return data;

    } catch (error) {

        console.log("Google Login Error:", error);

        throw error;
    }
};
