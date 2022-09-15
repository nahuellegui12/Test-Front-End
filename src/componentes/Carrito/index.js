import React from 'react'
import imagen from "../../images/Corebiz.png";

export const Carrito = () => {
  return (
    <div className='carritos'>
        <div className='carrito'>
            <div className='carrito__close'>
                <box-icon name="x"></box-icon>
            </div>
            <h2>Su carrito</h2>
            <div className='carrito__center'>

                <div className='carrito__item'>
                    <img src={imagen} alt=""></img>
                    <div>
                        <h3>Title</h3>
                        <p className='price'>$3000</p>
                    </div>
                    <div>
                        <box-icon name="up-arrow" type="solid"></box-icon>
                        <p className='cantidad'>1</p>
                        <box-icon name="down-arrow" type="solid"></box-icon>
                    </div>
                    <div className='remove__item'>
                        <box-icon name="trash"></box-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
