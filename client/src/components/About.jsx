/**
 * This is a React component that displays information about the author, including a rotating list of
 * fun facts and a personal story, and includes a button to scroll to the contact section.
 * @returns The About component is being returned, which contains JSX elements and logic for displaying
 * information about the author and their background.
 */
import React, { useState, useEffect } from 'react';

const About = (props) => {
    const funFacts = [
        'Fiber Artist',
        'Optimist',
        'Cat Servant',
        'Cancer Survivor',
        'Master of Queso',
        'Cozy Gamer',
        'Introvert'
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
        }, 2000);

        return () => clearTimeout(timer);
    }, [funFacts.length, index]);

    const scrollToContact = () => {
        if (props.contact.current) {
            props.contact.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='hero'>
            <div className="hero-content min-h-screen" ref={props.sectionRef}>
                <div className='hero-content flex-col md:flex-row gap-20 prose'>
                    <div>
                        <h3 className='text-lg'>A LITTLE ABOUT ME</h3>
                        <div>
                            <img
                                src={require('../images/jess-blue.jpeg')}
                                alt='Jess Petrey'
                                className='w-44 rounded-full shadow-2xl grayscale hover:grayscale-0 transition duration-700 delay-150'
                            />
                        </div>
                        <p className="py-3 text-center btn btn-accent bg-opacity-70 w-44">{funFacts[index]}</p>
                    </div>
                    <div className='max-w-2xl md:mt-40'>
                        <h3>Curiosity-driven Developer</h3>
                        <p>I'm a full-stack developer and former Google barista.</p>
                        <p>Working on a Google campus inspired me to explore
                            programming - I began learning Python and SQL through
                            Codecademy. My interest was initially in Data Analysis
                            (I wanted to create beautiful, interactive vizs), and quickly
                            came to love what I was learning. Breaks at work became
                            mini sprints, trying to learn as much as possible.</p>
                        <p>Realizing I enjoyed it led me to
                            looking into bootcamps, and to Coding Dojo where I learned
                            to be self-sufficient, solving problems with code.</p>
                        <p>I'm happiest when creating or working through a new challenge.
                            Currently, I'm expanding my knowledge of Python and studying data structures.</p>
                        <button className='btn btn-wide' onClick={scrollToContact}>Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
