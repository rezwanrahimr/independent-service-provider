import React, { useState } from "react";
import { confirmPasswordReset, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase.init' 

const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState({value:"",error:""});
  const [password,setPassword] = useState({value:"",error:""});
  const [confirmPassword,setConfirmPasswowrd] = useState({value:"",error:""});
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

  const handleEmail =(event)=>{
    const emailInput = event.target.value;
    if(/\S+@\S+\.\S+/.test(emailInput)){
      setEmail({value: emailInput,error:""})
    }
    else{
      setEmail({value:"",error:"please Provide the valid Email"});
    }
      
  }
  const handlePassword = (event)=>{
    const passwordInput = event.target.value;
    if(passwordInput.length < 6){
      setPassword({value:"",error:"password to short"})
    }else if(!/(?=.*[A-Z])/.test(passwordInput)){
      setPassword({
        value:"",error:"password must contain a capital letter"
      });
    }
    else{
      setPassword({value:"passwordInput",error:""});
    }
  };
  const handleConfirmPassword = (confirmPassword) =>{
    if(confirmPassword == password.value){
      setConfirmPasswowrd({value: confirmPassword, error:""})
    }
    else{
      setConfirmPasswowrd({value:"", error:"password mismatch"})
    }
   
  }
console.log(email);

const handleLogin = (event)=>{
    event.preventDefault();
    
   const email = event.target.email.value;
   const password = event.target.password.value; 
   const confirmPassword = event.target.confirmPassword.value;
    if(email.value == ""){
      setEmail({value:"",error:"Email is requard"})
    }
    if(password.value == ""){
      setPassword({value:"",error:"password is requard"})
    }
    if(email.value && password.value == confirmPassword.value){

   createUserWithEmailAndPassword(auth, email.value, password.value,)
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
       console.log(errorMessage);
       // ..
     });
    }
};
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>SignUp</h1>
        <form onSubmit={handleLogin}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={handleEmail} type='text' name='email' id='email' />
            </div>
            {
             
              email?.error && <p>{email.error}</p>
            }
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onBlur={handlePassword} type='password' name='password' id='password' />
            </div>
            {
              password.error && <p>{password.error}</p>
            }
          </div>
          <div className='input-field'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <div className='input-wrapper'>
              <input onBlur={handleConfirmPassword} type='Password' name='confirmPassword' id='confirmPassword' />
            </div>
            {
              confirmPassword.error && <p>{confirmPassword.error}</p>
            }
          </div>
          <button type='submit' className='auth-form-submit'>
            SignUp
          </button>
        </form>
        <p className='redirect'>
         
          <span onClick={() => navigate("/login")}>alredy have a account</span>
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

export default SignUp;