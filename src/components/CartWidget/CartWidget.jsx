import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            cart?.reduce((prev, curr) => {
               
                return prev + curr.quantity;
            }, 0)
        );

    },[cart])
    

    return (
        <div className='cartContainer'>
            <img className='cartImage' alt='carrito' src='/images/carrito.png' />
            {total !== 0
            ?   <div className='cartItemContainer'>                
                    <div className='cartItem'>{total}</div>
                </div>
            : null}

             
        </div>
        // <h2>CartWidget</h2>
    )
}

export default CartWidget;