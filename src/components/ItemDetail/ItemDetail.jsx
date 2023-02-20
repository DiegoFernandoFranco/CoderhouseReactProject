import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({ product }) => {
    const { addItem } = useContext(cartContext);
    const [contador, setContador] = useState(1);


    const onAdd = (cantidad) => {
        cantidad === 1
            ? console.log(`${cantidad} Item agregados al Carrito`)
            : console.log(`${cantidad} Items agregados al Carrito`)

    };

    // <li className='tarjetaProducto'>
    //         <h2>{product.id}</h2>
    //         <img alt={products.title} src={products.imageId} width='150px' />
    //         <h4>{products.title}</h4>
    //         <h4>{products.categoryId}</h4>
    //         <h5>{products.description}</h5>
    //         <h5>Stock: {products.stock}</h5>
    //         <h4>Precio: ${products.price}</h4>

    //     </li>
    return (
        <div className='detalleProductoContainer'>
            <div className='tarjetaProductoDetalle'>
                <img alt={product.title} src={product.imageId} />
                <div>
                    <h5>Id del Producto: {product.id}</h5>
                    <h4>{product.title}</h4>
                    <h5>{product.description}</h5>
                    <h5>Categoria: {product.categoryId}</h5>
                    <h5>Stock: {product.stock} {product.stock == 1 ? 'Unidad' : 'Unidades'} </h5>
                    <h4>Precio: ${product.price}</h4>
                </div>
            </div>
                <div className='botoneraCarrito'>
                    <ItemCount contador={contador} actualizaValor={setContador} initial={1} stock={product.stock} onAdd={onAdd} />
                    <button onClick={() => addItem(product, contador)}>To the Carrito</button>
                </div>
        </div>
    )
}

export default ItemDetail;