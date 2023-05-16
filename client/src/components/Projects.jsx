// import React from 'react';
// import ReactPlayer from 'react-player';

// const Projects = (props) => {
//     return (
//         <div>
//             <div className='hero'>

//                 <div className="hero-content min-h-screen" ref={props.sectionRef}>
//                     <div className='hero-content flex-col md:flex-row gap-10 prose'>
//                         <div className='max-w-sm'>
//                             <h3 className='text-lg'>PROJECTS</h3>
//                             <div className="flex-col">
//                                 <h2 className='text-xl'>StockTrackr</h2>
//                                 <p>Inventory management web app helping small
//                                     businesses track their inventory in real-time.
//                                     Pair programmed with <a href="https://www.abrardev.com/" target="_blank" rel="noreferrer">Abrar Hussain</a>.
//                                 </p>
//                             </div>
//                             <div className='flex flex-wrap'>
//                                 <div className='text-center px-5'>
//                                     <i className=" text-6xl fa-brands fa-java"></i>
//                                     <p>Java</p>
//                                 </div>
//                                 <div className='text-center px-5'>
//                                     <i className=" text-6xl fa-solid fa-server"></i>
//                                     <p>SQL</p>
//                                 </div>
//                                 <div className='text-center px-5'>
//                                     <i className=" text-6xl fa-solid fa-leaf"></i>
//                                     <p>Spring Boot</p>
//                                 </div>
//                             </div>
//                             <a className='btn' href='https://github.com/sahussain887/stockTrackr' target="_blank" rel="noreferrer">View Github Repo</a>
//                         </div>
//                         <div className='max-w-sm'>
//                             <ReactPlayer url={require('../images/demoVid.mov')} controls={true} muted className='max-w-fit' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='hero'>

//                 <div className='hero-content flex-col md:flex-row gap-10 prose'>
//                     <div className='max-w-sm'>
//                         <div className="flex-col">
//                             <h2 className='text-xl'>Swizzle</h2>
//                             <p className='max-w-sm'>A minimal cocktail recipe app for when you want a drink,
//                                 but don't remember how to make it - search for a drink
//                                 by name, or by ingredient and browse until something
//                                 catches your eye.
//                             </p>
//                         </div>
//                         <div className='flex flex-wrap'>
//                             <div className='text-center px-5'>
//                                 <i className=" text-6xl fa-brands fa-python"></i>
//                                 <p>Python</p>
//                             </div>
//                             <div className='text-center px-5'>
//                                 <i className=" text-6xl fa-brands fa-js"></i>
//                                 <p>JavaScript</p>
//                             </div>
//                             <div className='text-center px-5'>
//                                 <i className=" text-6xl fa-solid fa-pepper-hot"></i>
//                                 <p>Flask</p>
//                             </div>
//                         </div>
//                         <a className='btn' href='https://github.com/JessPetrey/Swizzle' target="_blank" rel="noreferrer">View Github Repo</a>
//                     </div>
//                     <div className='max-w-sm'>
//                         <ReactPlayer url={require('../images/ScreenRecordingSwizzle.mov')} controls={true} muted className='max-w-fit' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects

import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = (props) => {
    const projects = [
        {
            title: 'StockTrackr',
            description:
                'Inventory management web app helping small businesses track their inventory in real-time. Pair programmed with Abrar Hussain.',
            icons: [
                { class: 'fa-brands fa-java', label: 'Java' },
                { class: 'fa-solid fa-server', label: 'SQL' },
                { class: 'fa-solid fa-leaf', label: 'Spring Boot' },
            ],
            githubUrl: 'https://github.com/sahussain887/stockTrackr',
            videoUrl: require('../images/demoVid.mov'),
        },
        {
            title: 'Swizzle',
            description:
                "A minimal cocktail recipe app for when you want a drink, but don't remember how to make it - search for a drink by name or ingredient and browse until something catches your eye.",
            icons: [
                { class: 'fa-brands fa-python', label: 'Python' },
                { class: 'fa-brands fa-js', label: 'JavaScript' },
                { class: 'fa-solid fa-pepper-hot', label: 'Flask' },
            ],
            githubUrl: 'https://github.com/JessPetrey/Swizzle',
            videoUrl: require('../images/ScreenRecordingSwizzle.mov'),
        },
    ];


    return (
        <div ref={props.sectionRef}>
            {projects.map((project, index) => (
                <div key={index} className='hero'>
                    <div className="hero-content min-h-screen" >
                        <div className='hero-content prose'>
                            <ProjectItem {...project} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
