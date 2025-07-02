import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        const userData = {
            name, 
            email, 
            password
        }
        localStorage.setItem("user", JSON.stringify(userData));
        setName("");
        setEmail("");
        setPassword("");

        alert("Signup successful! You can now login.");
        navigate("/")
        console.log("Saving to localStorage:", userData);
    }
    return(
        <div>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <input type="Password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <div>
                    <button>Signup</button>
                </div>
            </form>
            <div>
                <p>If already signup </p>
                <span onClick={() => navigate("/")}
                style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
                marginLeft: "5px"
    }}
                    >
                    Login here
                </span>
            </div>
        </div>
    )
}


export default SignUp;