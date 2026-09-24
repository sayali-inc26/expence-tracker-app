import { useState } from "react";
import logo from "../assets/logo.png";
import googleLogo from "../assets/googleLogo.png"
// import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setCurrentPage }) {

    // const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Username:", userName);
        // console.log("Password:", password);
        // console.log("Remember Me:", rememberMe);

        if (userName === "" || password === "") {
            alert("Please enter username and password");
            return;
        }
        setCurrentPage("dashboard");
        // alert("Login successful!");
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
                        Sign In
                    </button>


                   

                </form>

                <div className="orSection">

                    <span></span>

                    <p>OR</p>

                    <span></span>

                </div>

                <button className="googleButton" onClick={() => alert("Google Login clicked")}>
                    <img src={googleLogo} alt="google logo" />
                    Sign in with Google
                </button>

            </div>

            <p className="signupText">
                Don't have an account?
                <span onClick={() => alert("Sign Up clicked")}>{" "}Sign Up for Free</span>
            </p>

        </div>
    );
}

export default Login;