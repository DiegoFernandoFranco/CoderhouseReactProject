import './ItemCount.css';

import { useState } from "react";


// const ItemCount = ({contador, actualizaValor, initial, stock, onAdd}) => {    
const ItemCount = ({contador, actualizaValor, initial, stock}) => {    

    // const [contador, setContador] = useState(initial);
    // const stock = 5;

    // const restar = () => {
    //     if (contador === initial) {
    //         return;
    //     }
    //     setContador(contador - 1);        
    // };

    const restar = () => {
        contador === initial
        ? void(0)
        : actualizaValor(contador -1);
        // : setContador(contador -1);
        // probando usando operador ternario, no se puede usar el return!!!
        // probe cambiando el return por null y tampoco funciona.        
    }
    const onAdd = () => {
        if (stock === contador) {
            alert('pasaste la cantidad del stock disponible');
            return;
        }
        actualizaValor(contador + 1);

    }

    // const sumar = () => {
    //     if (contador === stock) {
    //         return;
    //     }
    //     setContador(contador + 1);
    // }

    return (
        <div className='itemCountContainer'>
            <div className='botonera'>
                <button onClick={() => restar()}>-</button>
                <h3>{contador}</h3>
                <button onClick={onAdd}>+</button>
            </div>
            {/* <div className='agregar'>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div> */}
        </div>
    )
};

export default ItemCount;