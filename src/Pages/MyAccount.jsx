import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelloImage from '../Components/HelloImage';
import './MyAccount.css';

const MyAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='myAccount'>
      <HelloImage text='my account' />
      <div className="container">
        <form>
          <h3>Login</h3>
          <hr />
          <div className="name">
            <label htmlFor="name">Username or email address *</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="password">
            <label htmlFor="password">Your Password *</label>
            <div className="passwordContainer">
              <input type={showPassword ? "text" : "password"} id="password" name="password" />
              <span
                className="material-icons-outlined"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? 'visibility' : 'visibility_off'}
              </span>
            </div>
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="remember" id="remember" defaultChecked={false}/>
            <p>Remember me</p>
          </div>
          <div className="btn">
            <button type="submit">Login</button>
            <Link to='/lostpassword' className="lostPassword">Lost Your Password?</Link>
          </div>
        </form>

        <form>
          <h3>Register</h3>
          <hr />
          <div className="email">
            <label htmlFor="email">Your Email *</label>
            <input type="email" id="email" name="email" />
          </div>
          <p>A link to set a new password will be sent to your email address.</p>
          <div className="btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
