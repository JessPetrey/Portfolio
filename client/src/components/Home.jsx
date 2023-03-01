import React from 'react'


const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6 text-3xl">I'm a Full Stack Developer and Fiber Artist</p>{/* add js to rotate through different texts! */}
                    <button className="btn btn-primary">Hire me</button>
                </div>
            </div>
        </div>
    )
}

export default Home