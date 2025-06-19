import React from 'react';
import '../Styles/LoginPage.scss';
 // Adjust the path as necessary

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left side: Image div */}
      <div className="image-container">
        <img src="/images/img1.png" alt="" className="login-image" />
      </div>

      {/* Right side: Login form */}
      <div className="form-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your username" 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
