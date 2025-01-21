/**
 * The Home function is a React component that displays a hero section with a rotating list of
 * technologies and a button to render a resume.
 * @returns The Home component is being returned, which is a functional component in React. It renders
 * a hero section with a title, a paragraph, a button, and an image. The paragraph displays a
 * technology from the technologies array, which changes every 2 seconds using the useState and
 * useEffect hooks. The button triggers a function passed as a prop from the parent component, and the
 * image is a static image of the author.
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const technologies = ['Java', 'Python', 'Javascript', 'React', 'Spring MVC', 'MongoDB', 'SQL'];
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        }, 2000);

        return () => clearTimeout(timer);
    }, [technologies.length, index]);

    return (
        <div className="hero min-h-screen" ref={props.sectionRef}>
            <div className="hero-content flex-col md:flex-row gap-20 pt-40">
                <div>
                    <h1 className="text-6xl font-bold">Hi! I'm Jess</h1>
                    <p className="py-6 text-2xl" aria-live='polite'>
                        I'm a Full Stack Developer
                        <br />
                        <span>proficient in {technologies[index]}</span>
                    </p>
                    <button id="renderResume" aria-roledescription='button' className="btn btn-primary animate-wiggle" onClick={props.onButtonClick}>
                        View Resume
                    </button>
                    <button className='btn btn-secondary' onClick={() => navigate("/toybox")}>
                        Enter the Toy Box
                    </button>
                </div>
                <img
                    className="grayscale max-w-xs max-h-sm rounded-lg shadow-2xl hover:grayscale-0 transition duration-700 delay-150"
                    src={require('../images/Jess-selfie.jpeg')}
                    alt="Portrait of Jessica Petrey, Full Stack Developer"
                />
            </div>
        </div>
    );
};

export default Home;
