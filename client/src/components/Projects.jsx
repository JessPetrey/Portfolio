import React from 'react';
import ProjectItem from './ProjectItem';
import { skillsIconData } from './SkillsIconData';


const Projects = (props) => {
    const projects = [
        {
            title: 'StockTrackr',
            description:
                'Inventory management web app helping small businesses track their inventory in real-time. Pair programmed with Abrar Hussain.',
            icons: [ skillsIconData[0], skillsIconData[1], skillsIconData[2]],
            githubUrl: 'https://github.com/sahussain887/stockTrackr',
            videoUrl: require('../images/demoVid.mov'),
        },
        {
            title: 'Swizzle',
            description:
                "A minimal cocktail recipe app for when you want a drink, but don't remember how to make it - search for a drink by name or ingredient and browse until something catches your eye.",
            icons: [skillsIconData[3], skillsIconData[4], skillsIconData[5]],
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
