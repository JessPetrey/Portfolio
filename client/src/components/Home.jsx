import React, { useState, useEffect } from 'react'
import { useScrollTo } from 'react-use-window-scroll'


const Home = () => {
    const funFacts = ['Fiber Artist', 'optimist', 'cat servant', 'always cold', 'master queso consumer', 'occasional gamer', 'snake owner']
    const [index, setIndex] = useState(0)
    const scrollTo = useScrollTo()

    useEffect(() => {
        if (index <= funFacts.length - 1) {
            setTimeout(() => setIndex(index + 1), 2000);
        } else {
            setIndex(0)
        }
    }, [funFacts.length, index])

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row gap-20">
                <div>
                    <h1 className="text-6xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6 text-2xl ">I'm a Full Stack Developer <br />
                        <span>and {funFacts[index]}</span></p>
                    <button className="btn btn-primary animate-wiggle" onClick={() => scrollTo({ top: 2700, behavior: 'smooth' })}>Hire me</button>
                </div>
                <img className=" grayscale max-w-sm max-h-sm rounded-lg shadow-2xl hover:grayscale-0 transition duration-700 delay-150"
                    src={require('../images/Jess-selfie.jpeg')} alt='Jess Petrey' />
            </div>
        </div>
    )
}

export default Home