import React from 'react'
import {useScrollTo} from 'react-use-window-scroll'


const About = () => {
    const scrollTo = useScrollTo()

    return (
        <div className="hero min-h-screen">
            <div className='hero-content flex-col sm:flex-row gap-20 prose'>
                <div>
                    <h3 className='text-lg'>ABOUT</h3>
                    <h2 className='text-2xl'>Who is Jess?</h2>
                    <div>
                        <img src={require('../images/jess-blue.jpeg')} alt='Jess Petrey'
                            className='w-40 rounded-full shadow-2xl grayscale hover:grayscale-0 transition duration-700 delay-150'></img>
                    </div>
                </div>
                <div className='max-w-sm sm:mt-48'>
                    <h3>Curiosity-driven Developer</h3>
                    <p>I'm  passionate about bringing together the technical and 
                        visual aspects of engineering - User experience, smooth 
                        visuals and clean, accessible code matters.
                        I'm highly detail oriented and value efficiency - less is 
                        more when it comes to code.</p>
                    <p>I began coding on my own, exploring Python, SQL, and of 
                        course HTML & CSS. Realizing I enjoyed it led me to 
                        looking into bootcamps, and to Coding Dojo where I learned 
                        to be self-sufficient.</p>
                    <p>I'm happiest when creating or working through a new challenge. 
                        Currently I am honing the skills acquired in Coding Dojo, 
                        and about to begin my final stack - Java! - so stay tuned 
                        to see what's next!</p>
                <button className='btn btn-wide' onClick={ () => scrollTo({top:2700, behavior: 'smooth'})} >Keep in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default About