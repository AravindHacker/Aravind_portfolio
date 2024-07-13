import React, { useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Make sure this package is installed
import './index.css';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const menuRef=useRef();
    
    const openMenu=()=>{
        menuRef.current.style.right="0"
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px"
    }

    return (
        <div className="navbar">
            <img src="https://cdn-icons-png.flaticon.com/128/812/812847.png"  onClick={openMenu} alt="icon"  className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src='https://cdn-icons-png.flaticon.com/128/15059/15059105.png' onClick={closeMenu} alt='close'  className='nav-mob-close'/>
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src='' alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={() => setMenu("about")}>About me</p>
                    </AnchorLink>
                    {menu === "about" && <img src='' alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#skills'>
                        <p onClick={() => setMenu("skills")}>Skills</p>
                    </AnchorLink>
                    {menu === "skills" && <img src='' alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#projects'>
                        <p onClick={() => setMenu("projects")}>Projects</p>
                    </AnchorLink>
                    {menu === "projects" && <img src='' alt='' />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#Contact'>
                        <p onClick={() => setMenu("Contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "Contact" && <img src='' alt='' />}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
