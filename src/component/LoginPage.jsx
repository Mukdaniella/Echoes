import React from 'react';
import '../Styles/LoginPage.scss';
 // Adjust the path as necessary

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left side: Image div */}
      <div className="image-container">
         <img src={"/images/Group2.png"} alt="" className="login-image" />
      </div>

      {/* Right side: Login form */}
      <div className="form-container">
        <h1 className="welcome-text">Welcome Back!</h1>
        <p className="description-text">Sign in to access your personalized plans, discover new attractions, and continue
          exploring the best of Rwanda. Your next adventure is just a click away!
        </p>
        
        {/* Login form */}
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login-continue exploring and planning</button>
          <p>New to Travel? <a href="/signup">Create an account</a></p>
          <div className="social-login">
            <p className='forgot-password'> Remember me</p>
          <p className="forgot-password"><a href="/forgot-password">Forgot Password?</a></p>
          </div>
          <div className="social-buttons">
          <p className="google">Sign in with Google</p>
          <p className="apple">Sign in with Apple</p>
          <p className="facebook">Sign in with Facebook</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
