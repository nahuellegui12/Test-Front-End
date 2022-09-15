import React, { useState, useEffect } from 'react';
import Header from "../Header";

export const ProductosLista = () => {
    const url = "https://corebiz-test.herokuapp.com/api/v1/products"
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <h1 className='title'>Mas vendidos</h1>
            <div className='productos'>
                {!todos ? "Cargando..." :
                    todos.map((todo, index) => {
                        return <div className='producto'>
                                    <a href='#'>
                                        <div className='producto__img'>
                                            <img src={todo.imageUrl} className="imagen__producto"></img>
                                        </div>
                                    </a>
                                    <div className='producto__footer'>
                                        <p className='nombre__producto'>{todo.productName}</p>
                                        <p className='precio__producto'>Por ${todo.price}</p>
                                    </div>
                                    <div className='buttom' >
                                        <button className='btn' id='boton-contador'>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                                

                    })

                }
            </div>
        </>
    )
}
