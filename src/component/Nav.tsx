import React from 'react'
import Logo from './logo/Logo'
import './Nav.scss'

function Nav() {
    return (
        <div className="container">
            <div className="container_logo">
                <Logo/>
            </div>
            <div className="container_link">
                <div className="container_link_text1">
                    <div className="container_link_text1_boutton">

                    </div>
                    <span className="container_link_text1_t">
                        SCOREBOARD
                    </span>
                </div>
                <div className="container_link_text2">
                    <div className="container_link_text2_boutton">
                        
                        </div>
                    <span className="container_link_text2_y">
                        RULES
                    </span>
                </div>
                <div className="container_link_text3">
                    <div className="container_link_text3_boutton">
                        
                        </div>
                    <span className="container_link_text3_u">
                        CREDIT
                    </span>
                </div>
                <div className="container_link_user">
                    <div className="container_link_user_photo">

                    </div>
                    <div className="container_link_user_name">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Nav