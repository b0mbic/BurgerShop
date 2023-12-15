import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';

export const Register = () => {
  const onSubmit = (data) => console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter surname" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="enter password" />
        <input type="password" placeholder="repeat password" />
        <Popup trigger={<button>REGISTER</button>}>
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
            You are registered! Welcome!
          </div>
        </Popup>
      </form>
      <p>
        Already registered? <Link to="/login">Sign in</Link>
      </p>
    </>
  );
};
