import React from 'react'
import './Ball.scss'

function Ball() {
    return (
        <div className="container">
        <div className="paddle">
          <div className="solid">
            <div className="surface"></div>
            <div className="hold">
              <div className="top"></div>
              <div className="transition"></div>
              <div className="handle"></div>
            </div>
          </div>
          <div className="wiggly">
            <div className="string"></div>
            <div className="ball"></div>
          </div>
        </div>
      </div>
    )
}

export default Ball