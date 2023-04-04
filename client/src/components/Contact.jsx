import React from 'react'

const Contact = (props) => {
    return (
        <div className="hero min-h-screen">
            <div className='hero-content gap-20 prose' ref={props.sectionRef}>
                <div>
                    <h3 className='text-lg'>CONTACT</h3>
                    <h2 className='text-2xl'>Get In Touch</h2>
                    <div>
                        <p>I'm always looking for feedback, and to meet others who code. Can't wait to meet you!</p>
                        <form action="" className='form-control'>
                            <input type="email" name="email" placeholder='Email' className='my-2'/>
                            <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
                            <button type="submit" className='btn'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact