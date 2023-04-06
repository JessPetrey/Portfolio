import React, { useState, useEffect } from 'react'
import { useScrollTo } from 'react-use-window-scroll'


const About = (props) => {
    const scrollTo = useScrollTo()
    const funFacts = ['Fiber Artist', 'Optimist', 'Cat Servant', 'Cancer Survivor', 'Master of Queso', 'Cozy Gamer', 'Introvert']
    const [index, setIndex] = useState(0)


    useEffect(() => {
        if (index <= funFacts.length - 1) {
            setTimeout(() => setIndex(index + 1), 2000);
        } else {
            setIndex(0)
        }
    }, [funFacts.length, index])

    return (
        <div className="hero min-h-screen" >
            <div className='hero-content flex-col md:flex-row gap-20 prose' ref={props.sectionRef}>
                <div>
                    <h3 className='text-lg'>ABOUT</h3>
                    <h2 className='text-2xl'>Who is Jess?</h2>
                    <div>
                        <img src={require('../images/jess-blue.jpeg')} alt='Jess Petrey'
                            className='w-44 rounded-full shadow-2xl grayscale hover:grayscale-0 transition duration-700 delay-150'></img>
                    </div>
                    <p className="py-3 text-center btn btn-accent bg-opacity-70">{funFacts[index]}</p>
                </div>
                <div className='max-w-sm sm:mt-40'>
                    <h3>Curiosity-driven Developer</h3>
                    <p>I'm a full-stack developer and former Google barista. 
                        Working on a Google campus inspired me to explore 
                        programming - I began learning Python and SQL through 
                        Codecademy. My interest was initially in Data Analysis 
                        (I wanted to create beautiful, interactive vizs), and quickly 
                        came to love what I was learning. Breaks at work became 
                        mini sprints, trying to learn as much as possible.</p>
                    <p>Realizing I enjoyed it led me to
                        looking into bootcamps, and to Coding Dojo where I learned
                        to be self-sufficient, solving problems with code.</p>
                    <p>I'm happiest when creating or working through a new challenge.
                        Currently, I am honing my skills while looking for work.</p>
                    <button className='btn btn-wide' onClick={() => scrollTo({ top: 10000, behavior: 'smooth' })} >Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default About