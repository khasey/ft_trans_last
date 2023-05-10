import React from 'react'
import './Login.scss'
import Ball from'./ball/Ball'
import Connect from './connection/Connect';

function Login() {
  const handleLogin = () => {
    window.location.href = `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-5708081a593d51459800a12227896bb1ceddfce62af6c4a0468f893f082f5680&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofil&response_type=code`;
  };



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
