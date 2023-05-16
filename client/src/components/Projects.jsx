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
