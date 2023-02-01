import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='contenedor'>
            <img className='itemListContainerLogo' alt='logo' src='./images/logo.png' />
            <h1>ItemListContainer</h1>
            <h2>{greeting}</h2>
        </div>
    )
};

export default ItemListContainer;

