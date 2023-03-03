import React from 'react'

const Work = () => {
    return (
        <div className="hero min-h-screen">
            <div className='hero-content flex-col sm:flex-row gap-20 prose'>
                <div>
                    <h3 className='text-lg'>WORK</h3>
                    <h2 className='text-2xl'>Projects I have created</h2>
                    <div>
                        <h2 className='text-xl'>Swizzle</h2>
                        <div className='max-w-sm m-5'>
                            <p>A minimal cocktail recipe app for when you want a drink,
                                but don't remember how to make it - search for a drink
                                by name, or by ingredient and browse until something
                                catches your eye.
                            </p>
                            <p>( tech icons will go here)</p>
                            <button className='btn mr-5 my-5' onClick={ () => alert('Coming soon!')}>View Swizzle</button>
                            <a className='btn' href='https://github.com/JessPetrey/Swizzle'>View Github Repo</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work