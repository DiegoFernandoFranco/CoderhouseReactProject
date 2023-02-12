import './Item.css';

const Item = ({products}) => {
    return (                  
        <li>
            {/* <h2>{product.id}</h2> */}
            <img alt={products.title} src={products.imageId} width='150px' />
            <h3>{products.title}</h3>
            <h3>{products.category}</h3>
            <h4>{products.description}</h4>

        </li>
        // <li key={product.id}>{product.title}</li>
        
    )
};

export default Item;