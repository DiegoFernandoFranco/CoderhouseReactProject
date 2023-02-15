import './Cart.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
// import ItemCount from "../../components/ItemCount/ItemCount";
import {collection, addDoc, getFirestore} from 'firebase/firestore';

const Cart = () => {
    const {cart, removeItem, clear, contador, quitarUniCart, agregarUniCart} = useContext(CartContext);
    const [order, setOrder] = useState({});

    // console.log(cart);
    
    if(cart.lenght === 0) {
        return <h1>Carrito Vacio</h1>
    }

    const createOrder = () => {
        console.log('pruebaOrder')
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');

        const newOrder = {
            buyer: {
            name: 'Bruce Willis',
            phone: '555-5555',
            email: 'DuroDeMatar@NakatomiPlaza.com',
        },
        items: cart.map((product) => {
            const {name, price, id} = product;
            return {name, price, id}
        }),
        // items: cart.map((product) => {
        //     return {
        //         name: product.name,
        //         price: product.price,
        //         id: product.id
        //     }

        // }),
        total: cart.reduce((acc, current) => 
            acc + current.price * current.quantity, 0)
        }

        setOrder(newOrder);

        addDoc(querySnapshot, newOrder)
        .then((response) => {
            console.log(response);
            alert('Nueva Orden Creada Nro: '+ response.id);
        })
        .catch((error) => console.log(error));
    };

    return (
        <div>

            <div className='controlPanelCart'>
                <button  onClick={() => clear()}>Limpiar Carrito</button>            
                <button onClick={() => createOrder()} >Crear Orden</button>
            </div>
            <div className='shoppingCartItems'>            
                {cart.map((product) => (
                    <div className='shoppingCartItems2' key={product?.id} >
                        <img src={product?.image} alt='imagen de producto'/>
                        <div>
                            <h3>{product?.name}</h3>
                            <h5>Stock: {product?.stock}</h5>                            
                            <h5>En Carrito: {product?.quantity}</h5>
                            <h5>Precio: ${product?.price}</h5>
                            <h5>Total: ${product?.price * product.quantity}</h5>
                        </div>
                        <div className='shoppingCartButtons'>


                            <div className='itemCountContainer'>
                                <div className='botonera'>
                                    <button onClick={() => quitarUniCart(product)}>-</button>
                                    {/* <button onClick={() => restar()}>--</button> */}
                                    <h3>{contador}</h3>
                                    <button onClick={() => agregarUniCart(product)}>+</button>
                                </div>

                            </div>


                            {/* <ItemCount /> */}
                            {/* <ItemCount contador={contador} actualizaValor={setContador} initial={1} stock={product.stock} onAdd={onAdd} /> */}
                            {/* <button className='toTheCarritoCart'>To the Carrito</button> */}
                            <button className='buttonQuitar' onClick={() => removeItem(product.id)}>Quitar Producto</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;

