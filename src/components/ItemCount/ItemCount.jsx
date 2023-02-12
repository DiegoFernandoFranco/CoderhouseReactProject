import './ItemCount.css';

import { useState } from "react";


const ItemCount = ({initial, stock, onAdd}) => {    

    const [contador, setContador] = useState(initial);
    // const stock = 5;

    // const restar = () => {
    //     if (contador === initial) {
    //         return;
    //     }
    //     setContador(contador - 1);        
    // };

    const restar = () => {
        contador === initial ? void(0): setContador(contador -1);
        // probando usando operador ternario, no se puede usar el return!!!
        // probe cambiando el return por null y tampoco funciona.        
    }

    const sumar = () => {
        if (contador === stock) {
            return;
        }
        setContador(contador + 1);
    }

    return (
        <div className='itemCountContainer'>
            <div className='botonera'>
                <button onClick={() => restar()}>-</button>
                <h3>{contador}</h3>
                <button onClick={() => sumar() }>+</button>
            </div>
            <div className='agregar'>
                <button onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;