import { useState, useEffect } from 'react';
import './ItemListContainer.css';

import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../../components/ItemList/ItemList';

const arrayProducts = [ {
    id: 1,
    title: "Zapatilla 1",
    description: "Model One",
    price: 500,
    category: "Zapatillas",
    stock: 5,
    pictureUrl: '/images/zapatillas.png',
},
{
    id: 2,
    title: "Zapatilla 2",
    description: "Model One",
    price: 1000,
    category: "Zapatillas",
    stock: 5,
    pictureUrl: '/images/zapatillas.png',
},
{
    id: 3,
    title: "Ojota 1",
    description: "Model One",
    price: 1500,
    category: "Ojotas",
    stock: 5,
    pictureUrl: '/images/ojotas.png',
},
{
    id: 4,
    title: "Ojota 2",
    description: "Model One",
    price: 2000,
    category: "Ojotas",
    stock: 5,
    pictureUrl: '/images/ojotas.png',
},
{
    id: 5,
    title: "Zapato 1",
    description: "Model One",
    price: 2500,
    category: "Zapatos",
    stock: 5,
    pictureUrl: '/images/zapatos.png',
},
{
    id: 6,
    title: "Zapato 2",
    description: "Model One",
    price: 2150,
    category: "Zapatos",
    stock: 5,
    pictureUrl: '/images/zapatos.png',
}
];

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const onAdd = (cantidad) => {
        cantidad === 1 
        ? console.log(`${cantidad} Item agregados al Carrito`)
        : console.log(`${cantidad} Items agregados al Carrito`)
        
    };

    const getProducts = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(arrayProducts)
            reject('Fallaste')            
        }, 2000)
        
    }) 

    useEffect(() => {
        getProducts
            .then((response) => {
                setProducts(response);
                console.log(response);
            })
            .catch((error) => console.log(error) )
    }, [])

    return (    
        <div>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <div className='contenedor'>                      
                {/* <img className='itemListContainerLogo' alt='logo' src='./images/logo.png' />
                <h1>ItemListContainer</h1> */}
                <h2>{greeting}</h2>
                <ItemList products={products} />                
            </div>
        </div>    
    )
};

export default ItemListContainer;

