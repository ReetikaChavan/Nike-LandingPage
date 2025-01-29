import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import './loginstyle.css';

interface LoginResponse {
  token: string;
  username: string;
  email: string;
}

interface ErrorResponse {
  message?: string;
}

const NikeSignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/afterlogin');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', {
        email,
        password,
      });
      console.log('Login Response:', response.data);
    
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/afterlogin');
      }
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      setError(error.response?.data?.message || 'Login failed');
      console.error('Login Error:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  }

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
            <h2 className="nikeSignInTitle">
              IT'S BETTER AS
              <br />
              A MEMBER
            </h2>

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
              <a href="#" className="nikeForgotPassword">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="nikeSubmitButton" disabled={loading}>
              {loading ? 'Signing In...' : 'SIGN IN'}
            </button>

            <div className="nikeSignUpText">
              Not a Member?{' '}
              <Link to="/signup" className="nikeSignUpLink">
                Join Us
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NikeSignInPage;