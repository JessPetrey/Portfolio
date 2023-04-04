import React from 'react'
import {useScrollTo} from 'react-use-window-scroll'

import '../index.css'

const NavBar = (props) => {
    
    
    return (
        <div className='absolute'>
            <div className="navbar bg-base-200 fixed top-0 z-10 opacity-80">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><button onClick={ () => props.sectionRefs[0].current.scrollIntoView({ behavior: 'smooth'}) }>Home</button></li>
                        <li><button onClick={ () => props.sectionRefs[1].current.scrollIntoView({ behavior: 'smooth'}) } >About</button></li>
                        <li><button onClick={ () => props.sectionRefs[2].current.scrollIntoView({ behavior: 'smooth'}) }>Skills & Tools</button></li>
                        <li><button onClick={ () => props.sectionRefs[3].current.scrollIntoView({ behavior: 'smooth'}) }>Projects</button></li>
                        <li><button onClick={ () => props.sectionRefs[4].current.scrollIntoView({ behavior: 'smooth'}) }>Contact</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar