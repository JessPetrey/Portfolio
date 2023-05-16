import React, { useCallback } from 'react';

import '../index.css';

const NavBar = (props) => {
    const scrollToSection = useCallback(
        (index) => {
            props.sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
        },
        [props.sectionRefs]
    );

    const menuItems = [
        { label: 'Home', index: 0 },
        { label: 'About', index: 1 },
        { label: 'Skills & Tools', index: 2 },
        { label: 'Projects', index: 3 },
        { label: 'Contact', index: 4 },
    ];

    return (
        <div className='absolute'>
            <div className="navbar bg-base-300 fixed top-0 z-20 bg-opacity-80 justify-end md:justify-center w-screen">
                <div className='navbar navbar-end dropdown dropdown-bottom md:hidden'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-200 rounded-box w-36">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <button onClick={() => scrollToSection(item.index)}>{item.label}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='navbar-center hidden md:flex'>
                    <ul className="menu menu-horizontal rounded px-2">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <button onClick={() => scrollToSection(item.index)}>{item.label}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
