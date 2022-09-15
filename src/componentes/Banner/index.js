import React from 'react'
import Cabecera from '../../images/Cabecera.png'
import CabeceraMobile from '../../images/CabeceraMobile.png'


export const BannerImagen = () => {
    return (
      <div className='banner'>
          <img src={Cabecera} className='imagen__banner'></img>
          <img src={CabeceraMobile} className='imagen__banner-mobile'></img>
      </div>
    )
  }

