import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword
} from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



// This is SignUp Section.
const provider = new GoogleAuthProvider();
const SignUp = () => {
  const navigate = useNavigate();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate('/home');

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      })
  }

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  console.log(error);
  if (error) {
    alert(error.message);
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (user) {
    navigate("/home");
  }


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(
      email, password
    );
    createUserWithEmailAndPassword(email, password);

  }
  console.log(user)
  return (
    <div className='auth-form-container bg-success '>
      <div className='auth-form bg-secondary'>
        <h1>SignUp</h1>
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
          <div className='input-field'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <div className='input-wrapper'>
              <input type='Password' name='confirmPassword' id='confirmPassword' />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            SignUp
          </button>
        </form>
        <p className='redirect'>
          <span onClick={() => navigate("/login")}>Alredy have a account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={googleAuth} className='google-auth'>
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;