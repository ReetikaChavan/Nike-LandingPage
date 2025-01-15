import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginstyle.css';

const NikeSignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="nikeLoginContainer">
      <div className="nikePageWrapper">
        {/* Slogan Section */}
        <div className="nikeSloganContainer">
          <img
            className="nikeSloganImage"
            src="./media/jdt.png" // Ensure this path is correct relative to your project
            alt="Nike Slogan"
          />
        </div>

        {/* Login Form Section */}
        <div className="nikeSignInCard">
          <div className="nikeLogoContainer">
            <img className="nikeLogo" src="/media/logo1.png" alt="Nike Logo" />
          </div>

          <form onSubmit={handleSubmit} className="nikeForm">
            <h2 className="nikeSignInTitle">IT'S BETTER AS<br />A MEMBER</h2>

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
