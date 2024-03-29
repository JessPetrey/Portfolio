/* This is a React component called `ProjectItem` that takes in props such as `title`, `description`,
`icons`, `githubUrl`, and `videoUrl`. It renders a div with a title, description, icons, and a link
to a GitHub repository. If a `videoUrl` prop is provided, it also renders a ReactPlayer component
with the video. The component is exported as the default export of the module. */
import React from 'react';
import ReactPlayer from 'react-player';

const ProjectItem = ({ title, description, icons, githubUrl, videoUrl }) => (
    <div className=' flex flex-row p-20 rounded-box shadow-lg shadow-neutral'>
        <div className='max-w-md'>
            <div className="flex-col">
                <h1 className='text-xl'>{title}</h1>
                <p className='max-w-sm'>{description}</p>
            </div>
            <div className='flex'>
                {icons.map((icon) => (
                    <div className='text-center px-3' key={icon.label}>
                        <i className={`text-4xl ${icon.class}`}></i>
                        <p>{icon.label}</p>
                    </div>
                ))}
            </div>
            <a className='btn' href={githubUrl} target="_blank" rel="noreferrer">View GitHub Repo</a>
        </div>
        <div className='max-w-md'>
            {videoUrl && (
                <ReactPlayer url={videoUrl} controls={true} muted className='max-w-fit' />
            )}
        </div>
    </div>
);

export default ProjectItem;
