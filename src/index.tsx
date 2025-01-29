import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Loginform from './signin';
import Signupform from './signup';
import RunningPage from './running';
import Aftersignin from './afterlogin';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Loginform />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/running" element={<RunningPage />} />
        <Route path="/afterlogin" element={<Aftersignin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
