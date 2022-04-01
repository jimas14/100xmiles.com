import './App.scss';
import logo from './img/logo.png';
import shot from './img/shot.png';
import background from './img/background.mp4';
import emailjs from 'emailjs-com';
import React, { useState, useRef } from 'react';
import { Youtube, Instagram, Spotify, Tiktok } from 'react-bootstrap-icons';

function App() {
    const [nav, setNav] = useState('home');

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // TODO: add captcha
        // TODO: obfuscate these keys
        console.log(form);
      emailjs.sendForm('service_99yma6l', 'template_iwl2o39', form.current, 'yFrtZ0IowJdufkxJn')
        .then((result) => {
            console.log(result.text + ' - email sent');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='app'>
            <video id="background" autoPlay muted loop>
                <source src={background} type='video/mp4'></source>
            </video>

            <div className='header'>
                <img id="logo" src={logo} alt='100 Miles logo'></img>
            </div>

            <div className='navigation'>
                <div className='row'>
                    {/* TODO: make mobile have shop on same line, or stack buttons */}
                    <div className='col'>
                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('home')}>
                            HOME
                        </button>
                        
                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('about')}>
                            ABOUT
                        </button>

                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('contact')}>
                            CONTACT
                        </button>

                        <a  id='btn'
                            className='btn btn-link shadow-none' 
                            href='https://100miles.bigcartel.com/' 
                            target='_blank' 
                            rel='noreferrer'>
                            SHOP
                        </a>
                    </div>
                </div>
            </div>

            {/* TODO: Add routing */}
            <div className='content'>
                {nav === 'home' &&
                    <div className='home'>
                        <div className='playlist'>
                            <iframe title='YouTube' 
                                    src='https://www.youtube.com/embed/videoseries?list=PLpD0fqTBFRaouHuGWR09h7-fX_syp4e8o' 
                                    frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                }
                {nav === 'about' &&
                    <div className='about'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <img  
                                    id='shot' 
                                    src={shot} 
                                    alt='Headshot of 100 Miles creators Kyle Brennen Lawless and Grace D’Onofrio'>
                                </img>
                            </div>
                            <div id='spacer' className='col-md-1'></div>                            
                            <div className='col-md-1'></div>
                            <div className='col-md-5'>
                                {/* TODO: make height static and responsive w page */}
                                {/* TODO: center blurb vertically */}
                                <p id='blurb'>
                                        100 Miles is a multi-media based brand focusing specifically on Baltimore culture, 
                                        featuring individuals talented in areas of music, fine art, cuisine, and more. 
                                        Created by Kyle Brennen Lawless and Grace D'Onofrio in 2021, the duo combined 
                                        their strengths in graphic design and video production to create a platform to 
                                        highlight independent artists. The team has cultivated multiple video series 
                                        to highlight individuals and their talents.
                                </p>
                            </div>
                        </div>
                    </div>
                }
                {nav === 'contact' &&
                    <div className='contact'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form-group form-item'>
                                <input className='form-control' type='name' name='name' placeholder='Name'></input>
                            </div>
                            <div className='form-group form-item'>
                                <input className='form-control' type='email' name='email' placeholder='Email'></input>
                            </div>
                            <div className='form-group form-item'>
                                <textarea className='form-control' name='message' placeholder='Message' rows='5'/>
                            </div>
                            <button id='btn' type='submit' className='btn btn-link shadow-none'>SUBMIT</button>
                        </form>
                    </div>
                }
            </div>

            <div className='footer'>
                <div className='socials'>
                    <div className='row'>
                        <div className='col'>
                            <a  id='btn'
                                href='https://www.youtube.com/channel/UCV5iUnKTMNeONX0Tmgkr08g'
                                target='_blank' 
                                rel='noreferrer'>
                                <Youtube className='icon' size={28} />
                            </a>

                            <a  id='btn'
                                href='https://instagram.com/100milesmedia'
                                target='_blank' 
                                rel='noreferrer'>
                                <Instagram className='icon' size={28}/>
                            </a>
                            <a  id='btn'
                                href='https://open.spotify.com/show/6FaQQTWyfLEw4iPaUm8r8j'
                                target='_blank' 
                                rel='noreferrer'>
                                <Spotify className='icon' size={28}/>
                            </a>
                            <a  id='btn'
                                href='https://vm.tiktok.com/ZMeVbLATy/'
                                target='_blank' 
                                rel='noreferrer'>
                                <Tiktok className='icon' size={28}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
