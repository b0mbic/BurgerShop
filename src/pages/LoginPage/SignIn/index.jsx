import './style.scss';

import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';

export const SignIn = () => {
  const onSubmit = (data) => console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('you are signed in');
  };
  return (
    <>
      <div className="icons--header">
        <h2>Sign in with:</h2>
        <div className="icons">
          <FaFacebookF />
          <FaGoogle />
          <FaXTwitter />
          <IoLogoGithub />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <label>
          Remember me:
          <input type="checkbox" />
        </label>
        <Link to="/login">Forgot password?</Link>
        <Popup trigger={<button>SIGN IN</button>}>
          <div
            style={{
              color: 'red',
              transform: 'translate(0%,-500%)',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            You are logged in!
          </div>
        </Popup>
      </form>
      <p>
        Not a member? <Link to="/login">Register</Link>
      </p>
    </>
  );
};
