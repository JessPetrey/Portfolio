import React, { useRef } from 'react'
import emailjs, { init } from "@emailjs/browser";

const Contact = (props) => {
    init("user_xxxxxxxxxxxxxxxxxxx");
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_dfsa0qo", "template_re8ft6h", form.current, "IV7bzbNOADkc3p_XA")
            .then((result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="hero min-h-screen">
            <div className='hero-content gap-20 prose' ref={props.contact}>
                <div>
                    <h3 className='text-lg'>CONTACT</h3>
                    <h2 className='text-2xl'>Get In Touch</h2>
                    <div>
                        <p>Can't wait to meet you!</p>
                        <form ref={form} onSubmit={handleSubmit} className='form-control'>
                            <input type="text" name="name" placeholder='Your Name' className='my-2' />
                            <input type="email" name="email" placeholder='Your Email' className='my-2' />
                            <textarea name="message" cols="30" rows="8" placeholder='Message'></textarea>
                            <button type="submit" className='btn'>Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact