import React from 'react';
import { skillsIconData } from './SkillsIconData';

const Toolbox = (props) => {
    return (
        <div className="hero">
            <div className="hero-content min-h-screen" ref={props.sectionRef}>
                <div className="hero-content flex-col md:flex-row gap-20 prose">
                    <div>
                        <h3 className="text-lg">SKILLS &amp; TOOLS</h3>
                        <h2 className="text-2xl">My Toolbox and Things I Can Do</h2>
                        <div className="flex flex-row flex-wrap max-w-md">
                            {skillsIconData.map((item, index) => (
                                <div className="text-center px-5" key={index}>
                                    <i className={`text-6xl ${item.class}`} alt={`Logo for ${item.label}`}></i>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center max-w-xs">
                            <h3>Also proficient in:</h3>
                            <p>SQL, Express, MongoDB, Mongoose, RESTful APIs, VS Code, Spring Tool Suite</p>
                        </div>
                    </div>
                    <div className="max-w-xs">
                        <h2 className="text-xl">Currently working on:</h2>
                        <p>Improving my skills in, and understanding of JavaScript and React.</p>
                        <a href="https://github.com/JessPetrey" rel="noreferrer" target="_blank" className="btn btn-primary">
                            Check out my GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbox;
