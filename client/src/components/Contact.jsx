/* This is a React component that creates a contact form. It imports the necessary dependencies,
including React, useRef, useState, and emailjs. It initializes emailjs with a user ID. It sets up
state variables for errors, messageSubmitted, and messageLoading. It defines a handleSubmit function
that sends the form data using emailjs and updates the state variables accordingly. It also defines
a resetForm function and a validateForm function for form validation. Finally, it returns a JSX
element that renders the contact form with appropriate error messages and loading messages. */
import React, { useRef, useState } from 'react';
import emailjs, { init as initEmailJS } from '@emailjs/browser';

const Contact = (props) => {
    initEmailJS("user_xxxxxxxxxxxxxxxxxxx");
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [messageSubmitted, setMessageSubmitted] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setMessageLoading(true);
            emailjs
                .sendForm("service_dfsa0qo", "template_re8ft6h", form.current, "IV7bzbNOADkc3p_XA")
                .then(
                    (result) => {
                        setMessageSubmitted(true);
                        setTimeout(resetForm, 5000);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                )
                .finally(() => {
                    setMessageLoading(false);
                });
        }
    };

    const resetForm = () => {
        form.current.reset();
        setErrors({});
        setMessageSubmitted(false);
    };

    const validateForm = () => {
        const nameInput = form.current.name;
        const emailInput = form.current.email;
        const messageInput = form.current.message;
        const errors = {};

        // Name validation
        if (nameInput.value.trim() === '') {
            errors.name = 'Please enter your name';
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            errors.email = 'Please enter a valid email address';
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            errors.message = 'Please enter a message';
        }

        setErrors(errors);
        // Return true if there are no errors, otherwise false
        return Object.keys(errors).length === 0;
    };

    return (
        <div className="hero min-h-screen">
            <div className='hero-content gap-20 prose' ref={props.contact}>
                <div>
                    <h3 className='text-lg'>CONTACT</h3>
                    <h2 className='text-2xl'>Get In Touch</h2>
                    <div>
                        <p>Feel free to contact me if you have any questions or just want to say hi!</p>
                        <form ref={form} onSubmit={handleSubmit} className='form-control'>
                            <input type="text" name="name" placeholder='Your Name' className='my-2' required />
                            {errors.name && <span className="error">{errors.name}</span>}
                            <input type="email" name="email" placeholder='Your Email' className='my-2' required />
                            {errors.email && <span className="error">{errors.email}</span>}
                            <textarea name="message" cols="30" rows="8" placeholder='Message' required></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                            {/* on successful submit - conditionally render a loading message, success message,
                            or "send email" */}
                            {messageSubmitted ? (
                                <strong className='btn btn-primary'>Message Sent!</strong>
                            ) : (
                                <button type="submit" className='btn' disabled={messageLoading}>
                                    {messageLoading ?
                                        'Sending...' : 'Send Email'}
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
