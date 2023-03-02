import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen p-10 prose">
            <h3 className='text-2xl'>About</h3>
            <h2 className='text-4xl'>Who's Jess?</h2>
            <div>
                <img src={require('../images/Jess-selfie.jpeg')} alt='Jess Petrey' className='max-w-sm rounded-lg shadow-2xl'></img>
            </div>

        </div>
    )
}

export default About