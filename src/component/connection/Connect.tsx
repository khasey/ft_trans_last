import React from 'react'
import './Connect.scss'

function Connect() {
    const handleLogin = () => {
        window.location.href = `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-bcea8daa8aad15e5a6b1558c1c073e5a5d0f6f1851b4c19af3f3114d774acf57&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fintro&response_type=code`;
      };
    return (
        <div className="btn" onClick={handleLogin}>
            <a className='btn-1' href="javascript:void(0)">Login</a>
        </div>
    )
}

export default Connect