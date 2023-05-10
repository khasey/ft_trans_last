import React from 'react'
import './Credits.scss'
import Credit_box from './credits/Credit_box'


function Credits() {
  return (
    <div className="all">
    <div className="all_credits">
      <div className="all_credits_top">
        <Credit_box/>
        <Credit_box/>
      </div>
      <div className="all_credits_bottom">
        <Credit_box/>
        <Credit_box/>
      </div>
      {/* <Credit_box/> */}
    </div>
  </div>
  )
}
export default Credits