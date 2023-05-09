import Chat from './Chat'
import React from 'react'
import './Credits.scss'

function Credits() {
  return (
    <div className="all">
    <div className="all_credits">
      <span style={{color: 'white', fontSize: '100px'}}>CREDITS</span>
      <Chat/>
    </div>
  </div>
  )
}

export default Credits