import { useState } from "react";
import logo from "../assets/logo.png";

// import { GoogleLogin } from "@react-oauth/google";
// import { googleLogin } from "../utils/googleAuth";
import { signup } from "../utils/signup";
import "./Signup.css";

function Signup({ setCurrentPage }) {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userName === "" || email === "" || password === "") {
            alert("Please enter username and password");
            return;
        }
        try {
            // const data = await signup(userName, email, password);

            // console.log("================================Signup successful:", data);

            // alert("Account created successfully!");

            // setCurrentPage("login");

            const data = await signup(userName, email, password);

            console.log("Signup successful:", data);

            // Get session token from backend response
            const sessionToken = data?.data?.sessionToken;

            if (sessionToken) {
                localStorage.setItem("sessionToken", sessionToken);

                // Optional: store token type
                localStorage.setItem(
                    "tokenType",
                    data?.data?.tokenType || "Bearer"
                );

                console.log("Session token saved successfully");
            }

            alert("Account created successfully!");

            setCurrentPage("login");

        } catch (error) {

            console.error(error);

            alert("Something went wrong while creating account");
        }

    };

    return (
        <div className="loginPage">

            <div className="loginHeader">

                <div>
                    <img src={logo} alt="" />
                </div>

                <h1>Expense Manager</h1>

                <p>Empowering your academic financial journey.</p>

            </div>

            <div className="loginCard">

                <h2>Welcome back</h2>

                <form onSubmit={handleSubmit}>

                    <div className="inputGroup">

                        <label>User Name</label>

                        <input type="text" placeholder="John Doe" value={userName} onChange={(event) => setUserName(event.target.value)} />

                    </div>

                    <div className="inputGroup">

                        <label>Email</label>

                        <input type="text" placeholder="johndoe@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />

                    </div>

                    <div className="inputGroup">

                        <div className="passwordLabel">

                            <label>Password</label>

                            <button type="button" className="forgotPassword" onClick={() => alert("Forgot Password clicked")}>
                                Forgot Password?
                            </button>

                        </div>

                        <div className="passwordBox">

                            <input type={"password"} placeholder="************" value={password} onChange={(event) => setPassword(event.target.value)} />

                            {/* <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}
                            </button> */}

                        </div>

                    </div>

                    <div className="remember">

                        <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />

                        <label>Remember this device</label>

                    </div>

                    <button type="submit" className="signInButton">
                        Sign Up
                    </button>
                </form>

            </div>


            <p className="signupText">
                Already have an account?
                <span onClick={() => setCurrentPage("login")}>
                    {" "}Sign In
                </span>
            </p>



        </div>
    );
}

export default Signup;