import { CartContext } from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {



        let newCart;
        let product = cart.find((prod) => prod.id === item.id);

        if(product) {
            product.quantity += quantity;
            if (product.quantity > product.stock) {
                alert('no hay mas stock disponible');
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

    const isInCart = ((id) => {
        return cart.some((item) => item.id === id)
    });

    const clear = () => {
        setCart([]);
    };

    return (        
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
        
        
    )
}

export default CartProvider;