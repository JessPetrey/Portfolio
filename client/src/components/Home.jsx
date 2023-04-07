import React, { useState, useEffect } from 'react'


const Home = (props) => {
    const technologies = ['Java', 'Python', 'Javascript', 'React', 'Spring MVC', 'MongoDB', 'SQL']
    const [index, setIndex] = useState(0)


    useEffect(() => {
        if (index <= technologies.length - 1) {
            setTimeout(() => setIndex(index + 1), 2000);
        } else {
            setIndex(0)
        }
    }, [technologies.length, index])

    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className="hero-content flex-col md:flex-row gap-20 pt-40">
                <div>
                    <h1 className="text-6xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6 text-2xl ">I'm a Full Stack Developer <br />
                        <span>proficient in {technologies[index]}</span></p>
                    <button className="btn btn-primary animate-wiggle" onClick={props.onButtonClick}>Resume</button>
                </div>
                <img className=" grayscale max-w-xs max-h-sm rounded-lg shadow-2xl hover:grayscale-0 transition duration-700 delay-150"
                    src={require('../images/Jess-selfie.jpeg')} alt='Jessica Petrey' />
            </div>
        </div>
    )
}

export default Home