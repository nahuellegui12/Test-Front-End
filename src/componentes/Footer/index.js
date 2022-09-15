import React from 'react'
import Imagenfooter from '../../images/Imagenfooter.png'
import ImagenfooterMobile from '../../images/ImagenfooterMobile.png'

export const Footer = () => {
    return (
      <div className='footer'>
          <img className='imagen__footer' src={Imagenfooter}></img>
          <img className='imagen__footer-mobile' src={ImagenfooterMobile}></img>
      </div>
    )
  }