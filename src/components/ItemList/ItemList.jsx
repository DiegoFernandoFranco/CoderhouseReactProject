import './ItemList.css';
import { Link } from "react-router-dom";

import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        // <h2>{products}</h2>
        <ul className='tarjetaProductoContenedor'>
            {products.map((products) => (
                <Link key={products.id} to={`/item/${products.id}`}>
                    <Item products={products} />
                </Link>
            ))}
        </ul>

        
    )
};

export default ItemList;