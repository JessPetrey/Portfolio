import React from 'react'


const Home = () => {
    return (
        <div className="hero min-h-100vh" data-theme='luxury'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6">I'm a Full Stack Developer and Fiber Artist</p>
                    <button className="btn btn-primary">Hire me</button>
                </div>
            </div>
        </div>
    )
}

export default Home