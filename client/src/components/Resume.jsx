import React from 'react'
import '../index.css'

const Resume = (props) => {
    return (
        <div>
            <div className='flex flex-col bg-neutral py-10'>
                <div className='flex justify-evenly mb-5'>
                    <a className='btn btn-primary' href="https://docs.google.com/document/d/16ohVJKjV49MpGAKSKQHXwAIc6sMLtXjEXTGhhqG3RvE/edit?usp=sharing">Download with Google Drive</a>
                    <button className='btn-accent btn-circle' onClick={props.onButtonClick}>X</button>
                </div>
                <div className='place-self-center'>
                    <iframe className='w-screen sm:max-w-screen-md' title="resume" height="990" src="https://docs.google.com/document/d/e/2PACX-1vRHAWTtMkNMT09sxgqufIkxj2U_XgDX167288WQPKPbZyJxJYO4kvVS1boqGtVlTMN3xGcRrb3K2fQv/pub?embedded=true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Resume