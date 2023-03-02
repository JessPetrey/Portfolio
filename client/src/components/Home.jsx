import React, { useState } from 'react'


const Home = () => {
    const funFacts = ['Fiber Artist', 'optimist', 'cat servant', 'always cold', 'master queso consumer', 'occasional gamer', 'snake owner']
    const [index, setIndex] = useState(0)

    React.useEffect(() => {
        let timeout
        if (index <= funFacts.length - 1) {
            timeout = setTimeout(() => setIndex(index + 1), 2000);
        } else {
            setIndex(0)
        }
    }, [funFacts, index])


    return (
        <div className="hero min-h-screen min-w-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img className=" grayscale max-w-sm max-h-sm rounded-lg shadow-2xl hover:grayscale-0 transition duration-700 delay-150"
                    src={require('../images/Jess-selfie.jpeg')} alt='Jess Petrey' />
                <div className='w-96'>
                    <h1 className="text-5xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6 text-2xl ">I'm a Full Stack Developer <br />
                        <p className=''>and {funFacts[index]}</p></p>
                    <button className="btn btn-primary animate-wiggle">Hire me</button>
                </div>
            </div>
        </div>
    )
}

export default Home