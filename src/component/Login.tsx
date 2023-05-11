import React from 'react'
import './Login.scss'
import Ball from'./ball/Ball'
import Connect from './connection/Connect';

function Login() {


  return (
    <div className="all">
      {/* <div className="all_in">
        <button className="all_in_button" onClick={handleLogin}>
          <span className="all_in_button_text">CONNECT</span>
        </button>
        
      </div> */}
      <Connect/>
    </div>
  );
}

export default Login;
