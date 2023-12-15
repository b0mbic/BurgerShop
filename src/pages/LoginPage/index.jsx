import './login.scss';

import React, { useState } from 'react';
import { SignIn } from './SignIn';
import { Register } from './Register';

export const LoginPage = () => {
  const [activeForm, setActiveForm] = useState('login');

  const handleClick = (e) => {
    const buttonValue = e.target.value;
    setActiveForm(buttonValue);
  };

  return (
    <main className="login_page">
      <div className="control_btn_login">
        <button
          className={`control_login ${activeForm === 'login' && 'active'}`}
          onClick={handleClick}
          value="login"
        >
          Login
        </button>
        <button
          className={`control_login ${activeForm === 'register' && 'active'}`}
          onClick={handleClick}
          value="register"
        >
          Sign up
        </button>
      </div>
      {activeForm === 'login' && <SignIn />}
      {activeForm === 'register' && <Register />}
    </main>
  );
};
