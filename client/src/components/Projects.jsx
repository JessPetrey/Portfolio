import React from 'react';
import ReactPlayer from 'react-player';
import { useRef } from "react";

const Projects = (props) => {
    const aboutSection = useRef(null);
    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className='hero-content flex-col sm:flex-row gap-20 prose'>
                <div ref={aboutSection}>
                    <h3 className='text-lg'>PROJECTS</h3>
                    <div>

                        <h2 className='text-xl'>Swizzle</h2>
                        <div className=' m-5'>
                            <div className="flex">
                                <p className='max-w-sm'>A minimal cocktail recipe app for when you want a drink,
                                    but don't remember how to make it - search for a drink
                                    by name, or by ingredient and browse until something
                                    catches your eye.
                                </p>
                                <ReactPlayer url={require('../images/ScreenRecordingSwizzle.mov')} controls={true} muted />
                            </div>
                            <p>( tech icons will go here)</p>
                            <button className='btn mr-5 my-5' onClick={() => alert('Coming soon!')}>View Swizzle</button>
                            <a className='btn' href='https://github.com/JessPetrey/Swizzle'>View Github Repo</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects