import React from 'react'
import Logo from './logo/Logo'
import './Nav.scss'
import { NavLink, useNavigate } from 'react-router-dom'

function Nav() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container_logo">
                <Logo/>
            </div>
            <div className="container_link">
                <NavLink to={'/game'}  style={{textDecoration: 'none'}} className="container_link_text0">
                    <div className="container_link_text0_boutton">

                    </div>
                    <span onClick={() => navigate('game')} className="container_link_text0_t">
                        GAME
                    </span>
                </NavLink>
                <NavLink to={'/profil_page'}  style={{textDecoration: 'none'}} className="container_link_text1">
                    <div className="container_link_text1_boutton">

                    </div>
                    <span onClick={() => navigate('profil_page')} className="container_link_text1_t">
                        PROFIL
                    </span>
                </NavLink>
                <NavLink to={'/rules'} style={{textDecoration: 'none'}} className="container_link_text2">
                    <div className="container_link_text2_boutton">
                        
                        </div>
                    <span  onClick={() => navigate('rules')}className="container_link_text2_y">
                        RULES
                    </span>
                </NavLink>
                <NavLink to={'/credits'} style={{textDecoration: 'none'}} className="container_link_text3" >
                    <div className="container_link_text3_boutton">
                        
                    </div>
                    <span  onClick={() => navigate('credits')} className="container_link_text3_u">
                        CREDIT
                    </span>
                </NavLink>
            </div>
            
        </div>
    )
}

export default Nav