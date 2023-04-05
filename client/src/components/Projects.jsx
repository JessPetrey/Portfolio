import React from 'react';
import ReactPlayer from 'react-player';

const Projects = (props) => {
    return (
        <div>
            <div className="hero-content min-h-screen" ref={props.sectionRef}>
                <div className='hero-content flex-col md:flex-row gap-10 prose'>
                    <div className='max-w-sm'>
                        <h3 className='text-lg'>PROJECTS</h3>
                        <div className="flex-col">
                            <h2 className='text-xl'>StockTrackr</h2>
                            <p>Inventory management web app helping small 
                                businesses track their inventory in real-time.
                                Pair programmed with <a href="https://abrarbiz.net">Abrar Hussain</a>.
                            </p>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='text-center px-5'>
                                <i className=" text-6xl fa-brands fa-java"></i>
                                <p>Java</p>
                            </div>
                            <div className='text-center px-5'>
                                <i className=" text-6xl fa-solid fa-server"></i>
                                <p>SQL</p>
                            </div>
                            <div className='text-center px-5'>
                                <i className=" text-6xl fa-solid fa-leaf"></i>
                                <p>Spring Boot</p>
                            </div>
                        </div>
                        <a className='btn' href='https://github.com/sahussain887/stockTrackr'>View Github Repo</a>
                    </div>
                    <div className='max-w-sm'>
                        <ReactPlayer url={require('../images/demoVid.mov')} controls={true} muted className='max-w-fit' />
                    </div>
                </div>
            </div>
            <div className='hero-content flex-col md:flex-row gap-10 prose'>
                <div className='max-w-sm'>
                    <div className="flex-col">
                        <h2 className='text-xl'>Swizzle</h2>
                        <p className='max-w-sm'>A minimal cocktail recipe app for when you want a drink,
                            but don't remember how to make it - search for a drink
                            by name, or by ingredient and browse until something
                            catches your eye.
                        </p>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-python"></i>
                            <p>Python</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-brands fa-js"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className='text-center px-5'>
                            <i className=" text-6xl fa-solid fa-pepper-hot"></i>
                            <p>Flask</p>
                        </div>
                    </div>
                    <a className='btn' href='https://github.com/JessPetrey/Swizzle'>View Github Repo</a>
                </div>
                <div className='max-w-sm'>
                    <ReactPlayer url={require('../images/ScreenRecordingSwizzle.mov')} controls={true} muted className='max-w-fit' />
                </div>
            </div>
        </div>
    )
}

export default Projects