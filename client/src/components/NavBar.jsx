import React from 'react'
import {useScrollTo} from 'react-use-window-scroll'
import '../index.css'

const NavBar = () => {
    
    const scrollTo = useScrollTo()


    return (
        <div className='absolute'>
            <div className="navbar bg-base-200 fixed top-0 z-10 opacity-80">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><button onClick={ () => scrollTo({ behavior: 'smooth'}) }>Home</button></li>
                        <li><button onClick={ () => scrollTo({top: 1000, behavior: 'smooth'}) }>About</button></li>
                        <li><button onClick={ () => scrollTo({top: 1100, behavior: 'smooth'}) }>Work</button></li>
                        <li><button onClick={ () => scrollTo({top: 1100, behavior: 'smooth'}) }>Contact</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar