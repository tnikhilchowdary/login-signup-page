import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if(!savedUser){
            alert("No user found. Please Login first");
        }
        if(email === savedUser.email && password === savedUser.password){
            alert("Login successfully");
            navigate("/Home");
        }
        else{
            alert("Invalid name or password")
        }
    }


    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>
        If you dont have an account, please
        <span onClick={() => navigate("/SignUp")}
        style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
        marginLeft: "5px"
    }}
            >sign up here</span>
      </p>
        </div>
    )
}

export  default Login;