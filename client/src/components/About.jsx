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
                        <h3>Non-traditional paths are kinda my thing.</h3>
                        <p>I was born in Wisconsin; grew up in Alaska. My family moved to <a href='https://goo.gl/maps/JXKW1p1QJUQ7wXDb9' rel='noreferrer' target='_blank'>Kenai</a> when I was young, 
                            and started our family business - a breakfast-all-day diner in the local airport. In school, 
                            I was often bored, and jumped at the opportunity to be homeschooled - grand plans formed, of graduating 
                            high school early, starting college early, and moving somewhere without snow ASAP... derailed somewhat by 
                            the demands of a family-run restaurant. However, I learned the ins and outs of running a business, and 
                            gained valuable life experience along the way. Grand plans melted into manageable goals, and I worked hard 
                            set myself up for the best transition into adult life that I could.</p>
                        <em>* Life chucks a lemon *</em>
                        <p>Shortly after my 19th birthday, I was diagnosed with Melanoma. A random mole decided it didn't like traditional 
                            paths either, and decided to be cancer. Being a naiive kid, I did not have health insurance, which 
                            complicated things - long story short, I was able to secure travel to Seattle, and recieve the care I needed. 
                            I am grateful to say that I have been cancer-free since. Never did go to college... Life lemons have a way of 
                            altering your path.</p>
                        <p>My most recent non-traditional path took me to Coding Dojo, and a bootcamp program for software development. 
                            It was a whirlwind of full-stack training and algorithms, instilling discipline and strength through struggle - 
                            leading me to my current endeavour - Developing a startup. (Like, <strong>brand-new</strong> startup, updates to come!)
                        </p>
                        {/* <p>I'm a full-stack developer and former Google barista. Working on a Google campus inspired me to explore programming - I began learning Python and SQL through Codecademy. My interest was initially in Data Analysis (I wanted to create beautiful, interactive visualizations), and I quickly came to love what I was learning. Breaks at work became mini sprints, trying to learn as much as possible.</p>
                        <p>Realizing I enjoyed it led me to looking into bootcamps, and to Coding Dojo where I learned to be self-sufficient, solving problems with code.</p>
                        <p>I'm happiest when creating or working through a new challenge. Currently, I'm working on getting a startup company off the ground and studying data structures.</p> */}
                        <button className='btn btn-wide' onClick={scrollToContact}>Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
