import React from 'react'
import Ball from './ball/Ball'
import './Login.scss'

function Login() {
    return (
    <div className="container">
        
        <div className="container_load">
        <Ball/>
        </div>
        <div className="container_connect">
            <span className="container_connect_text">
                Connectez-vous
            </span>
        </div>
    </div>
    )
}

export default Login