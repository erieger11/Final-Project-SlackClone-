import React, { useState, useRef } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';

//const username;

const Login = () => {
    const [loginAction, setLoginAction] = useState('');
    const [registerAction, setRegisterAction] = useState('');
    const [username, setCurUsername] = useState('');
    const [curPassword, setCurPassword] = useState('');

    const [registerUserName, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastname] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');

    const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    setCurUsername(username);
    setCurPassword(password);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    loginLink(username, password);
    //save username to
    }



    const loginLink = (username , password) => {
        fetch('http://localhost:8080/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then((data) => {
               console.log(data);

               if (data.id_token) {
                   localStorage.setItem('token', data.token);
                   //get user account then profile
                   window.location.href = '/main';
               } else {
                   alert('Invalid username or password');
               }
           })
        .catch((error) => {
            console.error('Login problem:', error);
            alert('Failed to login. Please try again.');
        });
    };

//register
   const handleSubmit = (event) => {
       event.preventDefault();
       setRegisterAction(' active');
       setLoginAction(' active');
       const registerUserName = event.target.elements.regUsername.value;
       const registerPassword = event.target.elements.regPassword.value;
       const registerFirstName = event.target.elements.regFirstName.value;
       const registerLastName = event.target.elements.regLastName.value;
       const registerEmail = event.target.elements.regEmail.value;

       setRegisterUsername(registerUserName);
       setRegisterPassword(registerPassword);
       setRegisterFirstName(registerFirstName);
       setRegisterLastname(registerLastName);
       setRegisterEmail(registerEmail);

       console.log(`Username: ${registerUserName}`);
       console.log(`Password: ${registerPassword}`);
       console.log(`First Name: ${registerFirstName}`);
       console.log(`Last Name: ${registerLastName}`);
       console.log(`Email: ${registerEmail}`);

       registerLink(registerUserName, registerPassword, registerFirstName, registerLastName, registerEmail);
   }

   const registerLink = (registerUserName, registerPassword, registerFirstName, registerLastName, registerEmail) => {
       fetch('http://localhost:8080/api/register', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               registerUserName: registerUserName,
               registerPassword: registerPassword,
               registerEmail: registerEmail,
               registerFirstName: registerFirstName,
               registerLastName: registerLastName
           })
       })
       .then((response) => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.json();
       })
       .then((data) => {
           console.log(data);

           if (data.token) {
               localStorage.setItem('token', data.token);
               window.location.href = '/main';
           } else {
               alert('Failed to create account. Please try again.');
           }
       })
       .catch((error) => {
           console.error('Registration problem:', error);
           alert('Failed to create account. Please try again.');
       });
   };

    return (
        <div className={`wrapper${loginAction}`}>
            <div className="form-box login">
                <form action="" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" name="username" required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" name="password" required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">
                        Login
                    </button>

                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }}>
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div className={`form-box register${registerAction}`}>
                <form onSubmit={handleSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="First Name" name="regFirstName" required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Last Name" name="regLastName" required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" name="regUsername" required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" name="regEmail" required />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" name="regPassword" required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />I agree to the terms & conditions
                        </label>
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
