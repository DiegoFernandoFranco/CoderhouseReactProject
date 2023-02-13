import './Cart.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../../components/ItemCount/ItemCount";
import {collection, addDoc, getFirestore} from 'firebase/firestore';

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext);
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
            name: 'Nombre Inventado',
            phone: 'telefono Inventado',
            email: 'email Inventado',
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
        <div className='shoppingCartContainer'>            
            {cart.map((product) => (
                <div key={product?.id} style={{width:150}}>
                    <img src={product?.image} alt='imagen de producto' width='100px'/>
                    <h3>{product?.name}</h3>                    
                    <h4>{product?.quantity}</h4>
                    <h5>{product?.price}</h5>
                    <ItemCount />
                    <button style={{color: 'black'}} onClick={() => removeItem(product.id)}>Quitar Producto</button>
                </div>
            ))}
            <div>
                <button style={{color: 'black'}} onClick={() => clear()}>Limpiar Carrito</button>
            </div>
            <div>
                <button onClick={() => createOrder()} style={{color: 'black'}} >Crear Orden</button>
            </div>
        </div>
    )
}

export default Cart;