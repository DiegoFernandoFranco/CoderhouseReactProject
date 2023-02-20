import { cartContext } from "./cartContext";
import { useState } from "react";

const cartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        
        console.log(item, quantity);

        let newCart;
        let product = cart.find((prod) => prod.id === item.id);

        if(product) {
            product.quantity += quantity;
            if (product.quantity > product.stock) {
                alert('No hay mas stock disponible');
                return;
            }

            newCart = [...cart];
        }   else {

            product = {
                id: item.id,
                name: item.title,
                price: item.price,
                quantity: quantity,
                image: item.imageId,
                category: item.categoryId,
                stock: item.stock,

            };
            newCart = [...cart, product];
        }
        setCart(newCart);
    };


    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
        
    };
    
    const quitarUniCart = (item) => {

        let indice = cart.findIndex((prod) => prod.id === item.id);
        // console.log(indice)
        // console.log(item.id)
        console.log(item.quantity)
        // console.log(cart)
        if (item.quantity === 1) {
            removeItem(item.id);
        }   else {            
                const nuevoCart = [...cart];
                nuevoCart[indice].quantity -= 1;
                // console.log(nuevoCart);
                setCart(nuevoCart);        
        }
    };
    
    const agregarUniCart = (item) => {

        let indice = cart.findIndex((prod) => prod.id === item.id);
        // console.log(indice)
        // console.log(item.id)
        // console.log(cart)
        if (item.quantity === item.stock) {
            alert('No hay mas Stock para agregar al Carrito')
        }   else {
                const nuevoCart = [...cart];
                nuevoCart[indice].quantity += 1;
                // console.log(nuevoCart);
                setCart(nuevoCart);        
        }

    };
    


    const isInCart = ((id) => {
        console.log(cart.some((item) => item.id === id))
        return cart.some((item) => item.id === id)
    });

    const clear = () => {
        setCart([]);
    };

    // const plus = (x)=>{
    //     if(x.quantity<x.stock){
    //       const finder = cart.find((p)=>p.id===x.id)
    //       if(finder){addItem(x,1)}
    //     }
    //   };

    return (        
        <cartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, quitarUniCart, agregarUniCart}}>
            {children}
        </cartContext.Provider>
        
        
    )
}

export default cartProvider;