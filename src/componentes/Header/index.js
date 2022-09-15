import React from 'react'
import Corebiz from '../../images/Corebiz.png'


export const Header = () => {

    return (
        <header>
            <a href='#'>
                <div className="logo">
                    <img src={Corebiz}/>
                </div>
            </a>
            <div>
                <input placeholder='Que estas uscando?' className='input__header'/>
            </div>
            <ul>
                <li className='item__micuenta'>
                    <box-icon name="user"></box-icon>
                    <a href='#'>Mi cuenta</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className="item__total">1</span>
            </div>
        </header>
    )
}