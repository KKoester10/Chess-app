import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton =() => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true);
        }
    };
    
    /*window.addEventListener('resize, showButton');*/
  
    return (
    <>
     <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo" onClick={closeMobileMenu}>
                CHSSBRD <i className="fa-solid fa-chess"></i>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
                <Link to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                    Home
                </Link>
             </li>
             <li className='nav-item'>
                <Link to='/chessgame' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                    Play A Game
                </Link>
                </li>
               
                <li className='nav-item'>
                <Link to='/aboutchess' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                    All About Chess
                </Link>
                </li>
             <li className='nav-item'>
                <Link to='/thedevelopers' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                    About The Developers
                </Link>
                </li>
            
            </ul>
           
        </div>
     </nav> 
    </>
  )
}

export default Navbar
