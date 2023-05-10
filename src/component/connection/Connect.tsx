import React from 'react'
import './Connect.scss'

function Connect() {
    const handleLogin = () => {
        window.location.href = `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-5708081a593d51459800a12227896bb1ceddfce62af6c4a0468f893f082f5680&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofil&response_type=code`;
      };
    return (
        <div className="btn" onClick={handleLogin}>
            <a className='btn-1' href="javascript:void(0)">Login</a>
        </div>
    )
}

export default Connect