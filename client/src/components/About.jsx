import React from 'react'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className='hero-content flex-col sm:flex-row gap-20 prose'>
                <div>
                    <h3 className='text-xl'>About</h3>
                    <h2 className='text-2xl'>Who is Jess?</h2>
                    <div>
                        <img src={require('../images/jess-blue.jpeg')} alt='Jess Petrey'
                            className='w-40 rounded-full shadow-2xl grayscale'></img>
                    </div>
                </div>
                <div className='max-w-sm sm:mt-48'>
                    <h3>Curiosity-driven Developer</h3>
                    <p>I'm  passionate about bringing together the technical and visual aspects of engineering <n />
                        - User experience, smooth visuals and clean, accessible code matters. <n />
                        I'm highly detail oriented and value efficiency - less is more when it comes to code.</p>
                    <p>I began coding on my own, exploring Python, SQL, and of course HTML & CSS. <n />
                        Realizing I enjoyed it led me to looking into bootcamps, and to Coding Dojo <n />
                        where I learned to be self-sufficient.</p>
                    <p>I'm happiest when creating or working through a new challenge. <n /> 
                        Currently honing the skills acquired in Coding Dojo, and about to begin my final stack <n />
                        - Java! - so stay tuned to see what's next!</p>
                </div>
            </div>
        </div>
    )
}

export default About