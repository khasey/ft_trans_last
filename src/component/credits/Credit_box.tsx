import React from 'react'
import './Credit_box.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Credit_box() {
  return (
    <div className="credit_box">
        <div className="credit_box_left">
            <img className="credit_box_left_photo"></img>
            <span className="credit_box_left_name">KTHIERRY</span>
            <span className="credit_box_left_job">FRONT-END</span>
        </div>
        <div className="credit_box_right">
            <a className='credit_box_right_icon' href=""><LinkedInIcon/></a>
            <a className='credit_box_right_icon' href=""><GitHubIcon/></a>
            <a className='credit_box_right_icon' href=""><InstagramIcon/></a>
            <a className='credit_box_right_icon' href=""><FacebookIcon/></a>
        </div>
    </div>
  )
}

export default Credit_box