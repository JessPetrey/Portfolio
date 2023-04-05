import React from 'react';
import ReactPlayer from 'react-player';
import { useRef } from "react";

const Projects = (props) => {
    const aboutSection = useRef(null);
    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className='hero-content flex-col md:flex-row gap-10 prose'>
                <div>
                    <h3 className='text-lg'>PROJECTS</h3>
                    <div className='flex flex-row flex-wrap max-w-lg'>
                        <div className="flex flex-col">
                            <h2 className='text-xl'>Swizzle</h2>
                            <p className='max-w-sm'>A minimal cocktail recipe app for when you want a drink,
                                but don't remember how to make it - search for a drink
                                by name, or by ingredient and browse until something
                                catches your eye.
                            </p>
                            <p>( tech icons will go here)</p>
                            <a className='btn' href='https://github.com/JessPetrey/Swizzle'>View Github Repo</a>
                        </div>
                    </div>
                </div>
                <div className='max-w-xs'>
                    <ReactPlayer url={require('../images/ScreenRecordingSwizzle.mov')} controls={true} muted className='max-w-fit'/>
                </div>
            </div>
        </div>
    )
}

export default Projects