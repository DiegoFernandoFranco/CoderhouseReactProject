

const Item = ({product}) => {
    return (                  
        <li>{product.title}</li>
        // <li key={product.id}>{product.title}</li>
        
    )
};

export default Item;