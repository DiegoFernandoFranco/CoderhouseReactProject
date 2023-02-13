import './Item.css';

const Item = ({products}) => {
    return (                  
        <li className='tarjetaProducto'>
            {/* <h2>{product.id}</h2> */}
            <img alt={products.title} src={products.imageId} width='150px' />
            <h4>{products.title}</h4>
            {/* <h4>{products.categoryId}</h4> */}
            <h5>{products.description}</h5>
            <h5>Stock: {products.stock}</h5>
            <h4>Precio: ${products.price}</h4>

        </li>
        // <li key={product.id}>{product.title}</li>
        
    )
};

export default Item;