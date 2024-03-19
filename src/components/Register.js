import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();//This function allows the component to navigate to different routes.
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    //to store value in localstorage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };

  return (
    <div className="register-container">
    <form onSubmit={handleSubmit} className="register-form">
        <h1>Create an account</h1>
        <label className="input-label">Name: 
            <input type='text' name='name' value={input.name} placeholder='Your name' onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} />
        </label>
        <label className="input-label">Email: 
            <input type='email' name='email' value={input.email} placeholder='Your email' onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} />
        </label>
        <label className="input-label">Password: 
            <input type='password' name='password' value={input.password} placeholder='Your password' onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} />
        </label>
        <button type='submit' className="submit-btn">Register</button>
        <p>Already have an account?
            <a href='/login'>Login here</a>
        </p>
    </form>
    </div>
  );
};

export default Register;