import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />        
        <ItemListContainer greeting={`Hola Muchachos, Soy un ItemListContainer!!!`}/>


      </header>
    </div>
   
  );
}

export default App;
