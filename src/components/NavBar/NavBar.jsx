import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <NavLink to='/'>
                <img className='navBarLogo' alt='logo' src='/images/logo.png' />
            </NavLink>
            <ul className="navBarCategorias">
                <li>
                    <NavLink to='/'>Todos</NavLink>                        
                </li>
                <li>
                    <NavLink to='/category/ojotas'>Ojotas</NavLink>                        
                </li>
                <li>
                    <NavLink to="/category/zapatos">Zapatos</NavLink>                        
                </li>
                <li>
                    <NavLink to="/category/zapatillas">Zapatillas</NavLink>                        
                </li>
            </ul> 
            <Link to='/cart'>
                <CartWidget />
            </Link>           
        </div>
    )
}

export default NavBar;