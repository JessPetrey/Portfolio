import React from 'react'
import '../index.css'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 fixed top-0 opacity-50 hover:opacity-100">
            <div className="flex-1">
                <p className="btn btn-ghost normal-case text-xl">Jessica Petrey</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='http://www.w3.org/2000/svg'>Home</a></li>
                    <li><a href='http://www.w3.org/2000/svg'>About</a></li>
                    <li><a href='http://www.w3.org/2000/svg'>Work</a></li>
                    <li><a href='http://www.w3.org/2000/svg'>References</a></li>
                    <li><a href='http://www.w3.org/2000/svg'>Contact</a></li>
                    <li tabIndex={0}>
                        <a href='http://www.w3.org/2000/svg'>
                            Choose a Theme!
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a href='http://www.w3.org/2000/svg'>Submenu 1</a></li>
                            <li><a href='http://www.w3.org/2000/svg'>Submenu 2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar