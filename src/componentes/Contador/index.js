import React, { useState } from "react";

export const ItemCount = ()=> {
    const [count, setCount] = useState(1);

    const decrease = ()=> {
        
        setCount(count - 1);
    }

    const increase = ()=> {
        
        setCount(count + 1);
    }
    return(
        <div className="counter">
            <button onClick={increase}>+</button>
            <span>{count}</span>
            <button onClick={decrease}>-</button>
        </div>
    )

}