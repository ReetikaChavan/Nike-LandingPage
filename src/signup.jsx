import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signupstyle.css';

const NikeSignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Email:', email, 'Password:', password);
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <div className="nikeSignUpContainer">
      <div className="nikePageWrapper">
        {/* Slogan Section */}
        <div className="nikeSloganContainer">
          <img
            className="nikeSloganImage"
            src="./media/jdt.png" 
            alt="Nike Slogan"
          />
        </div>

        {/* Sign Up Form Section */}
        <div className="nikeSignUpCard">
          <div className="nikeLogoContainer">
            <img className="nikeLogo" src="/media/logo1.png" alt="Nike Logo" />
          </div>

          <form onSubmit={handleSubmit} className="nikeForm">
            <h2 className="nikeSignUpTitle">CREATE YOUR ACCOUNT</h2>

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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="nikeInputField"
                required
              />
            </div>

            <div className="nikeRememberForgot">
              <label className="nikeCheckbox">
                <input type="checkbox" className="nikeCheckboxInput" />
                Keep me signed in
              </label>
            </div>

            <button type="submit" className="nikeSubmitButton">SIGN UP</button>

            <div className="nikeSignInText">
              Already a Member?{' '}
              <Link to="/login" className="nikeSignUpLink">Sign In</Link>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NikeSignUpPage;
