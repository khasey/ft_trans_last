import React, { useState } from 'react'
import Logo from './logo/Logo'
import './Nav.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import './Chat.scss'
import { Box } from '@mui/material'
import Chat from './Chat'
import Backdrop from './Backdrop'

function Nav() {

    const navigate = useNavigate();

    // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const handleChatClick = () => {
    //     setIsDrawerOpen(!isDrawerOpen);
    // };

    

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
                <div style={{textDecoration: 'none'}} className="container_link_text4" >
                    <div className="container_link_text4_boutton">
                        
                    </div>
                        <span className="container_link_text4_u">
                            <Backdrop/>
                        </span>
                    </div>
                </div>    
        </div>
    )
}

export default Nav