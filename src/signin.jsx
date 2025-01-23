import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginstyle.css';

const NikeSignInPage = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();

 const handleSubmit = async (e) => {
   e.preventDefault();
   setError('');

   try {
     const response = await axios.post('/api/auth/login', {
       email,
       password
     });

     localStorage.setItem('token', response.data.token);
     navigate('/');
   } catch (err) {
     setError(err.response?.data?.message || 'Login failed');
   }
 };

 return (
   <div className="nikeLoginContainer">
     <div className="nikePageWrapper">
       <div className="nikeSloganContainer">
         <img
           className="nikeSloganImage"
           src="./media/jdt.png" 
           alt="Nike Slogan"
         />
       </div>

       <div className="nikeSignInCard">
         <div className="nikeLogoContainer">
           <img className="nikeLogo" src="/media/logo1.png" alt="Nike Logo" />
         </div>

         <form onSubmit={handleSubmit} className="nikeForm">
           <h2 className="nikeSignInTitle">IT'S BETTER AS<br />A MEMBER</h2>

           {error && <div className="nikeErrorMessage">{error}</div>}

           <div className="nikeInputGroup">
             <input
               type="email"
               placeholder="Email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="nikeInputField"
               required
             />
             <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="nikeInputField"
               required
             />
           </div>

           <div className="nikeRememberForgot">
             <label className="nikeCheckbox">
               <input type="checkbox" className="nikeCheckboxInput" />
               Keep me signed in
             </label>
             <a href="#" className="nikeForgotPassword">Forgot password?</a>
           </div>

           <button type="submit" className="nikeSubmitButton">SIGN IN</button>

           <div className="nikeSignUpText">
             Not a Member?{' '}
             <Link to="/signup" className="nikeSignUpLink">Join Us</Link>
           </div>
         </form>
       </div>
     </div>
   </div>
 );
};

export default NikeSignInPage;