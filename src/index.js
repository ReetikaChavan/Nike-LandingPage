import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; 
import App from './App';
import Loginform from './login';
import './loginstyle.css';
import Signupform from './signup';
import './signupstyle.css';
import RunningPage from './running';
import './runstyle.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/running" element={<RunningPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
