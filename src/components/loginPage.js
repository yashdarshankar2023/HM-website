import React, { useState } from "react";
import '../styles/signup_user.css'
import { Link } from 'react-router-dom'

const initialData = { email: "", password: "" }

const LoginPage = () => {
  const [data, setData] = useState(initialData);
  const [email, setemail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [password, setpassword] = useState('');
  const [isValidpassword, setIsValidpassword] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    if (isValid && isValidpassword) {
      console.log('Email submitted: ', email);
      console.log(data);
      fetch("https://9690-115-187-37-90.in.ngrok.io/api/v1/user/login", {
        method: "POST",
        headers: {
          Authentication: `Bearer ${undefined}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error Request");
          }
          console.log(response)
          return response.json();
        })
        .then((json) => console.log(json))
        .catch((error) => console.log(error));

    } else {
      console.log('Invalid email: ', email , password);
    }

  }


  return (
    <>

      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" >
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="text" name="email" id="username" value={email} onChange={e => {
              setemail(e.target.value)
              // console.log(email,password)
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsValid(emailRegex.test(e.target.value));

              setData({ email: e.target.value, password: password })

            }} required />
            
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={e => {
              setpassword(e.target.value)
              const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
              setIsValidpassword(passwordregex.test(e.target.value));
              setData({ email: email, password: e.target.value })
            }} required />
    
          
            <div className="forgot">
              <Link rel="noopener noreferrer" href="#!">
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button type='button' onClick={submithandler} className="sign">Sign in</button>
        </form>
        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Facebook" className="icon">
            <Link to="https://www.facebook.com/profile.php?id=100069828099402&mibextid=ZbWKwL">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
          </button>
          <button aria-label="Log in with Twitter" className="icon">
            <Link to="https://twitter.com/HelpyMoto?t=FmxcdcAnmVX6GO20FkKFzA&s=09" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
              </svg>
            </Link>
          </button>
          <button aria-label="Log in with Instagram" className="icon">
            <Link to="https://instagram.com/helpy_moto?igshid=YmMyMTA2M2Y=">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </Link>
          </button>
        </div>
        <p className="signup">
          Don't have an account?
          <Link rel="noopener noreferrer" to="/Newaccount" className="">
            Sign up
          </Link>
        </p>
      </div>


    </>

  )
}

export default LoginPage