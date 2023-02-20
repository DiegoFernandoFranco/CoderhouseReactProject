import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Error from './pages/Error/Error';
import Cart from './pages/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cartProvider from './context/cartProvider';


function App() {
  return (
    <cartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='*' element={<Error />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </cartProvider>

    // <div className="App">
    //   <header className="App-header">

    //     <NavBar />        
    //     <ItemListContainer greeting={`Hola Muchachos, Soy un ItemListContainer!!!`}/>


    //   </header>
    // </div>

  );
}

export default App;
