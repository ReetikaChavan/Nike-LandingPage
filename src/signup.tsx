import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import './signupstyle.css';

interface SignUpResponse {
  token: string;
}

interface ErrorResponse {
  message?: string;
}

const NikeSignUpPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post<SignUpResponse>('/api/auth/register', {
        username,
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      navigate('/signin');
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="nikeSignUpContainer">
      <div className="nikePageWrapper">
        <div className="nikeSloganContainer">
          <img
            className="nikeSloganImage"
            src="./media/jdt.png" 
            alt="Nike Slogan"
          />
        </div>

        <div className="nikeSignUpCard">
          <div className="nikeLogoContainer">
            <img className="nikeLogo" src="/media/logo1.png" alt="Nike Logo" />
          </div>

          <form onSubmit={handleSubmit} className="nikeForm">
            <h2 className="nikeSignUpTitle">CREATE YOUR ACCOUNT</h2>

            {error && <div className="nikeErrorMessage">{error}</div>}

            <div className="nikeInputGroup">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="nikeInputField"
                required
              />
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
            </div>

            <button type="submit" className="nikeSubmitButton">SIGN UP</button>

            <div className="nikeSignInText">
              Already a Member?{' '}
              <Link to="/signin" className="nikeSignUpLink">Sign In</Link>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NikeSignUpPage;