import { EHCACHE } from 'generator-jhipster/jdl/jhipster/cache-types';
import React, { useState, useEffect } from 'react'
import Corebiz from '../../images/Corebiz.png'


export const Header = () => {
    const [count, setCount] = useState(0);

    const increase = ()=> {
        setCount(count + 1);
    }

    
    let botonContador=document.querySelectorAll("#boton-contador");
    
    botonContador.forEach((x)=>{
        x.addEventListener("click", increase);
    })
      
    return (
        <header>
            <a href='#'>
                <div className="logo">
                    <img src={Corebiz}/>
                </div>
            </a>
            <div>
                <input placeholder='Que estas buscando?' className='input__header'/>
            </div>
            <ul>
                <li className='item__micuenta'>
                    <box-icon name="user"></box-icon>
                    <a href='#'>Mi cuenta</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{count}</span>
            </div>
        </header>
        
    )
}