import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




const Toolbox = () => {
    return (
        <div className="hero min-h-screen">
            <div className='flex-col sm:flex-row gap-20 prose'>
                <div>
                    <h3 className='text-lg'>SKILLS & TOOLS</h3>
                    <h2 className='text-2xl'>My Toolbox and Things I Can Do</h2>
                    <div className='flex flex-row justify-evenly'>
                        {/* <FontAwesomeIcon icon='fa-brands fa-html5' /> */}
                        <p>HTML5 </p>
                        <p>CSS3</p>
                        <p>Python</p>
                        <p>Javascript</p>
                        <p>Node</p>
                        <p>Flask</p>
                    </div>
                    <div className='flex flex-row justify-evenly'>
                        <p>React</p>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                        <p>MySQL</p>
                        <p>Git</p>
                        <p>Github</p>
                    </div>
                    <div className='flex flex-row justify-evenly'>
                        <p>Terminal </p>
                        <p>VS Code </p>
                        <p>RESTful APIs </p>
                    </div>
                </div>
                <h2 className='text-xl'>Currently working on: </h2>
                <div>
                    <p>Improving my skills in, and understanding of Javascript and React.</p>
                    <a href='https://github.com/JessPetrey'>Check out my Github</a>
                </div>
                
            </div>
        </div>
    )
}

export default Toolbox