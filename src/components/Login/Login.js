import React from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase.init' 
import './Login.css'
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const googleLogin =()=>{
signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  navigate("/");
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});
  }

const handleLogin = (event)=>{
    event.preventDefault();
   const email = event.target.email.value;
   const password = event.target.password.value; 
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       navigate("/");
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      //  if(errorMessage.includes("Already in Use")){
      //   toast.error("Email already in use",{id:"errormessage"});

      // }
      // else{
      //   toast.error(errorMessage,{id:"errormessage"});
      // }
       // ..
     });
};
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
         
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={googleLogin} className='google-auth'>
           
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;