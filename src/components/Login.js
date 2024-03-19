import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem("Successfully logged in", true);
            navigate("/");
        }
        else{
            alert("Wrong credentials");
        }
    };

  return (
    <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>Email:
            <input type='email' name='email' value={input.name} placeholder='Your email' onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} />
        </label>
        <label>Password:
            <input type='password' name='password' value={input.password} placeholder='Your password' onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} />
        </label>
        <button type='submit'>Login</button>
        <p>Don't have an account?
            <a href='/register'>Register here</a>
        </p>
    </form>
  )
}

export default Login;