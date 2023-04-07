import React from 'react'

import '../index.css'

const NavBar = (props) => {


    return (
        <div className='absolute'>
            <div className="navbar bg-base-300 fixed top-0 z-20 bg-opacity-80 justify-end md:justify-center w-screen">
                <div className='navbar navbar-end dropdown dropdown-bottom md:hidden'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-2 shadow bg-base-200 rounded-box w-36">
                        <li><button onClick={() => props.sectionRefs[0].current.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                        <li><button onClick={() => props.sectionRefs[1].current.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                        <li><button onClick={() => props.sectionRefs[2].current.scrollIntoView({ behavior: 'smooth' })}>Skills & Tools</button></li>
                        <li><button onClick={() => props.sectionRefs[3].current.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                        <li><button onClick={() => props.sectionRefs[4].current.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
                    </ul>
                </div>
                <div className='navbar-center hidden md:flex'>
                    <ul className="menu menu-horizontal rounded px-2">
                        <li><button onClick={() => props.sectionRefs[0].current.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                        <li><button onClick={() => props.sectionRefs[1].current.scrollIntoView({ behavior: 'smooth' })} >About</button></li>
                        <li><button onClick={() => props.sectionRefs[2].current.scrollIntoView({ behavior: 'smooth' })}>Skills & Tools</button></li>
                        <li><button onClick={() => props.sectionRefs[3].current.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                        <li><button onClick={() => props.sectionRefs[4].current.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar