import './Cart.css';
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
// import ItemCount from "../../components/ItemCount/ItemCount";
import {collection, addDoc, getFirestore, doc, updateDoc} from 'firebase/firestore';

const Cart = () => {
    const {cart, removeItem, clear, contador, quitarUniCart, agregarUniCart} = useContext(cartContext);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [order, setOrder] = useState({});
    const db = getFirestore();

    useEffect(() => {
        setOrder({
            buyer: {
                name: 'Bruce Willis',
                phone: '555-5555',
                email: 'DuroDeMatar@NakatomiPlaza.com',
            },
            items: cart.map((product) => {
                const {name, price, id} = product;
                return {name, price, id}
            }),
            total: cart.reduce((acc, current) => 
            acc + current.price * current.quantity, 0)
        });
    }, [cart]);
    
    if(cart.lenght === 0) {
        return <h1>Carrito Vacio</h1>
    }

    const createOrder = (event) => {

        if (formValue.name === '' || formValue.phone === '' || formValue.email === '') {
            alert('Falta llenar el formulario para crear la Order')
        }   else {
            console.log('Nombre Ingresado Correctamente')
            // event.preventDefault();
        // console.log('pruebaOrder')
        
        const querySnapshot = collection(db, 'orders');
        
        const currentOrder = {
            ...order,
            buyer: formValue,
        };

        // const newOrder = {
        //     buyer: {
        //     name: 'Bruce Willis',
        //     phone: '555-5555',
        //     email: 'DuroDeMatar@NakatomiPlaza.com',
        // },
        // items: cart.map((product) => {
        //     const {name, price, id} = product;
        //     return {name, price, id}
        // }),
        // // items: cart.map((product) => {
        // //     return {
        // //         name: product.name,
        // //         price: product.price,
        // //         id: product.id
        // //     }

        // // }),
        // total: cart.reduce((acc, current) => 
        //     acc + current.price * current.quantity, 0)
        // }

        // setOrder(newOrder);
       
        addDoc(querySnapshot, currentOrder)
        .then((response) => {
            console.log(response);
            updateStockProducts();
            alert('Nueva Orden Creada Nro: '+ response.id);
        })
        .catch((error) => console.log(error));
        };
        
    };
   

    const updateStockProducts = () => {
        cart.forEach((product) => {
            const querySnapshot = doc(db, 'items', product.id);

            updateDoc(querySnapshot, {                
                stock: product.stock - product.quantity,                
            })
                .then(() => {
                    console.log('Stock Actualizado')
                    clear()
                    console.log('Borrar Carrito ya que se hizo la orden')
                })
                .catch((error) => console.log(error))
        })
    };

    const handleInput = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <div>
                <form className='formulario'>
                    <label>Nombre</label>
                    <input onChange={handleInput} name='name' value={formValue.name}
                     type='text' placeholder='Diego Franco' style={{width: '120px'}}/>
                    <label>Telefono</label>
                    <input onChange={handleInput} name='phone' value={formValue.phone}
                     type='text' placeholder='15-555-5555' style={{width: '100px'}}/>
                    <label>Email</label>
                    <input onChange={handleInput} name='email' value={formValue.email}
                     type='email' placeholder='diegofranco@coderhouse.com' style={{width: '200px'}}/>
                    {/* <button onClick={createOrder}>Crear Orden</button> */}
                    
                </form>
            </div>

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

