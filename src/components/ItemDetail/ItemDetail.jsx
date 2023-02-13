import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [contador, setContador] = useState(1);


    const onAdd = (cantidad) => {
        cantidad === 1
            ? console.log(`${cantidad} Item agregados al Carrito`)
            : console.log(`${cantidad} Items agregados al Carrito`)

    };

    return (
        <div>
            <img alt={product.title} src={product.imageId} width='150px' />
            <h3>{product.title}</h3>
            <h3>{product.description}</h3>
            <h3>{`Categoria: ${product.categoryId}`}</h3>
            <h3>{`Precio: $${product.price}`}</h3>
            <h5>{`Stock: ${product.stock}`}</h5>
            {/* <h4>{product.description}</h4> */}
            <ItemCount contador={contador} actualizaValor={setContador} initial={1} stock={product.stock} onAdd={onAdd} />
            <div>
                <button onClick={() => addItem(product, contador)} style={{ color: 'black' }}>To the Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;