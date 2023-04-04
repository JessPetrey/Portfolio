import React from 'react'

const Toolbox = (props) => {
    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className='flex-col sm:flex-row gap-20 prose'>
                <div>
                    <h3 className='text-lg'>SKILLS & TOOLS</h3>
                    <h2 className='text-2xl'>My Toolbox and Things I Can Do</h2>
                    <div className='flex flex-row flex-wrap justify-evenly'>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-html5"></i>
                            <p>HTML5</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-css3"></i>
                            <p>CSS3</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-python"></i>
                            <p>Python</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-node"></i>
                            <p>Node</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-react"></i>
                            <p>React</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-git"></i>
                            <p>git</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-brands fa-github"></i>
                            <p>Github</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-6xl fa-solid fa-terminal"></i>
                            <p>Terminal</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly mt-5'>
                    </div>
                    <div className='flex flex-row justify-evenly mt-5'>
                        <p>MongoDB </p>
                        <p>Mongoose </p>
                        <p>VS Code </p>
                        <p>RESTful APIs </p>
                    </div>
                </div>
                <h2 className='text-xl'>Currently working on: </h2>
                <div>
                    <p>Improving my skills in, and understanding of Javascript and React.</p>
                    <a href='https://github.com/JessPetrey' className='btn btn-primary'>Check out my Github</a>
                </div>

            </div>
        </div>
    )
}

export default Toolbox