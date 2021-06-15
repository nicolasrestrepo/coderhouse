import React, { useState } from 'react';

// ejemplo practico del entregable
const ItemCount = ({stock, onAdd, initial}) => {

    // tirar la logica

    const [count, setCount] = useState(initial)

    const addCount = () => {
        if(stock > 1 && count <= stock){
            setCount(count ++)
        }
    }

    return (
        <div>
            <button onClick={addCount}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
