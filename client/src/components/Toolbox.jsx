import React from 'react'

const Toolbox = (props) => {
    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className='hero-content flex-col md:flex-row gap-10 prose'>
                <div>
                    <h3 className='text-lg'>SKILLS & TOOLS</h3>
                    <h2 className='text-2xl'>My Toolbox and Things I Can Do</h2>
                    <div className='flex flex-row flex-wrap mt-10 max-w-lg'>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-java"></i>
                            <p>Java</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-node"></i>
                            <p>Node.js</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-python"></i>
                            <p>Python</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-css3"></i>
                            <p>CSS</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-react"></i>
                            <p>React</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-git"></i>
                            <p>Git</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-github"></i>
                            <p>Github</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-solid fa-terminal"></i>
                            <p>Terminal</p>
                        </div>
                    </div>
                    <div className='mt-5 text-center'>
                        <h3>Also proficient in:</h3>
                        <p>MongoDB, Mongoose, RESTful APIs, VS Code, Spring Tool Suite</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl'>Currently working on: </h2>
                    <p>Improving my skills in, and understanding of Javascript and React.</p>
                    <a href='https://github.com/JessPetrey' className='btn btn-primary'>Check out my Github</a>
                </div>

            </div>
        </div>
    )
}

export default Toolbox