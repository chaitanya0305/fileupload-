// SignIn.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const onSignIn = () => {
    // In a real application, you would perform authentication here

    // For the example, simply navigate to FileUpload.js
    navigate('/file-upload');
  };

  return (
    <div style={outerContainerStyles}>
      <div style={innerContainerStyles}>
        <div style={inputBoxStyles}>
          <label>
            Username:
            <input type="text" style={inputStyles} />
          </label>
        </div>
        <div style={inputBoxStyles}>
          <label>
            Password:
            <input type="password" style={inputStyles} />
          </label>
        </div>
        <button onClick={onSignIn} style={signInButtonStyles}>
          Sign In
        </button>
      </div>
    </div>
  );
};

const outerContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const innerContainerStyles = {
  border: '2px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
};

const inputBoxStyles = {
  margin: '10px 0',
};

const inputStyles = {
  width: '100%',
  boxSizing: 'border-box',
};

const signInButtonStyles = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default SignIn;
