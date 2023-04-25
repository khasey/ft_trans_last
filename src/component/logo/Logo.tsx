import React from 'react'
import './Logo.scss'

function Logo() {
  return (
    <div className='logo'>
      <span className='logo_text_1'>P</span>
      
        <div className="logo_circle">
            
            <div className="logo_circle_text">
                {/* <span className="logo_circle_text_first">42</span> */}
            </div>
        </div>
        <span className='logo_text_2'>NG</span>
    </div>
  )
}

export default Logo