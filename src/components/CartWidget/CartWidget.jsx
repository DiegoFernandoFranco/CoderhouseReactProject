import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
    const {cart} = useContext(cartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            cart?.reduce((prev,curr) => {
                console.log(prev, curr);
                return prev + curr.quantity;
            }, 0)
        )

    },[cart])

    return (
        <div className='cartContainer'>
            <img className='cartImage' alt='carrito' src='./images/carrito.png' />
            <div className='cartItemContainer'>
                <div className='cartItem'>{cart.length}</div>
                {/* <div className='cartItem'>555</div> */}
            </div>
        </div>
        // <h2>CartWidget</h2>
    )
}

export default CartWidget;