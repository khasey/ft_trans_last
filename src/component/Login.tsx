import React from 'react'
import './Login.scss'
import Ball from'./ball/Ball'
function Login() {
    return (
    <div className="all">
        <div className="all_in">
        {/* <Ball/>  */}
            <div className="all_in_ball">
               <div className="all_in_ball_b">
                
               </div>
            </div>
            <a href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-dcaa0fd451e852b7a12bb0d63673e9c73fec244c0afcc75bdfde8ecdab1c1ec7&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fgame&response_type=code" className="all_in_button">
                <span className='all_in_button_text'>CONNECT-TOI</span>
            </a>
            
        </div>
    </div>
    )
}

export default Login