/**
 * This is a React component that renders a footer with a message indicating the creator and the year.
 * @returns A React functional component named `Footer` is being returned. It renders a `footer`
 * element and a `div` element containing a `p` element with the text "Created by Jessica Petrey | 2023".
 */
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 ">
            <div>
                <p>Created by Jessica Petrey | 2023 </p>
            </div>
        </footer>
    )
}

export default Footer