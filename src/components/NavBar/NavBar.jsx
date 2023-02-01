import './NavBar.css';

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <img className='navBarLogo' alt='logo' src='./images/logo.png' />
            <ul className="navBarCategorias">
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
            </ul>            
            <CartWidget />
        </div>
    )
}

export default NavBar;