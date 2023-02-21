import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import './ItemListContainer.css';
import Loading from '../../components/Loading/Loading';

import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    // const ComponentToRender = loading === true ? Loading : ItemList;

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = category ? query(queryBase, where ('categoryId', '==', category)) : queryBase;
        // const querySnapshot = collection(db, 'items');

        getDocs(querySnapshot)
                .then((response) => {
                    const data = response.docs.map((doc) => {
                        // console.log(doc.data());
                        return {id: doc.id, ...doc.data()};
                    });
                    setLoading(false);
                    // console.log(data);
                    setProducts(data);
                })
                .catch((error) => {console.log(error)});
        
            // if (category) {
            //     const newConfiguration = query(querySnapshot, where('categoryId','==', category ));
            //     getDocs(newConfiguration)
            //     .then((response) => {
            //         const data = response.docs.map((doc) => {
            //             // console.log(doc.data());
            //             return {id: doc.id, ...doc.data()};
            //         });
            //         setLoading(false);
            //         // console.log(data);
            //         setProducts(data);
            //     })
            //     .catch((error) => {console.log(error)});
            // }   else {
            //     getDocs(querySnapshot)
            //         .then((response) => {
            //             const data = response.docs.map((doc) => {
            //                 // console.log(doc.data());
            //                 return {id: doc.id, ...doc.data()};
            //             });
            //             setLoading(false);
            //             // console.log(data);
            //             setProducts(data);
            //         })
            //         .catch((error) => {console.log(error)})
            // }
        
    };

    // const getProducts = fetch('https://dummyjson.com/products',
    // {
    //     method: 'GET',
    // }
    // );
    // esto anda***********
    // useEffect(() => {
    //     getProducts
    //         .then(res => res.json())
    //         .then((resp) => {
    //             console.log(resp.products)
    //             setProducts(resp.products)           
    //         })           
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, []);

    useEffect(() => {
        getProducts();
    }, [category])

    // useEffect(() => {
    //     if (category) {
    //         const removeCharacters = category.includes('%20')
    //     }
    // })
    // useEffect(() => {   
        
    //     if(category){

    //         getProducts
    //             .then(res => res.json())
    //             .then((resp) => {
    //                 console.log(resp.products)
    //                 console.log(resp.products.filter(res => res.category === category))
    //                 setProducts(resp.products.filter(res => res.category === category)) 
    //             })           
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }   else {
    //         getProducts
    //                 .then(res => res.json())
    //                 .then((resp) => {
    //                     console.log(resp.products)
    //                     setProducts(resp.products)           
    //                 })           
    //                 .catch((error) => {
    //                     console.log(error)
    //                 })
    //     }    
    // }, [category]);

    return (    
        <div className='contenedor'>
            
            <div> 
                {loading ? (
                    <Loading />
                ) :(
                    <ItemList products={products} productos={products} />
                )}
                {/* <ComponentToRender productos={category ? filteredProducts : products} /> */}
                {/* <ItemList products={products} />                 */}
            </div>
        </div>    
    )
};

export default ItemListContainer;

