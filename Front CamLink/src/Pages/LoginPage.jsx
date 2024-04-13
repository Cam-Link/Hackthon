import React from 'react';
import './style.css';
import { SupervisedUserCircle, } from '@mui/icons-material';
import { motion,  } from 'framer-motion';

function SliderForm() {
  const handleSignUp = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignIn = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
    
  };
  

  return (
  <>
  
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1 className="shared-h1">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social social-a">
            <SupervisedUserCircle/>
            </a>
            
          </div>
          <span className="shared-p">or use your email for registration</span>
          <input className='in' type="text" placeholder="Name" />
          <input className='in' type="email" placeholder="Email" />
          <input className='in' type="password" placeholder="Password" />
          <button className='btn'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="shared-h1">Sign In</h1>
          <div className="social-container">
            
            <a href="#" className="social social-a">
              <SupervisedUserCircle/>
            </a>
          </div>
          <span className="shared-p">or use your account</span>
          <input className='in' type="email" placeholder="Email" />
          <input className='in' type="password" placeholder="Password" />
          <button className='btn'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="shared-h1">Welcome Back</h1>
            <p className="shared-p">To keep connected with us please login with your personal info</p>
            <button className="ghost shared-p" onClick={handleSignIn}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="shared-h1">Hello, Friend</h1>
            <p className="shared-p">Enter your personal details and start the journey with us</p>
            <button className="ghost shared-p" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default SliderForm;