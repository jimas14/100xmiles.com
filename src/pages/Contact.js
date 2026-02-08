import emailjs from 'emailjs-com';
import React, { useState, useRef } from 'react';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(() => {
            setStatus('success');
            form.current.reset();
        }, () => {
            setStatus('error');
        });
    };

    return (
        <div className='contact'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='form-group form-item'>
                    <input className='form-control' type='text' name='name' placeholder='Name' required />
                </div>
                <div className='form-group form-item'>
                    <input className='form-control' type='email' name='email' placeholder='Email' required />
                </div>
                <div className='form-group form-item'>
                    <textarea className='form-control' name='message' placeholder='Message' rows='5' required />
                </div>
                <button id='btn' type='submit' className='btn btn-link shadow-none' disabled={status === 'sending'}>
                    {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
                </button>
            </form>
            {status === 'success' && <p className='form-message success'>Message sent successfully!</p>}
            {status === 'error' && <p className='form-message error'>Something went wrong. Please try again.</p>}
        </div>
    );
}

export default Contact;
