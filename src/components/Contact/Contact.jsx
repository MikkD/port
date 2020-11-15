import React from 'react'
import './Contact.scss';
import contactImg from '../../assets/home/me1.jpg';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


function Contact() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="contact-wrapper">
                        <div className="left-contact">
                            <p>I’m always up for adventure and international opportunities. Feel free to say hello via <a href="#" >ndosyukov@gmail.com</a></p>
                            <div className="contact-social-links">
                                <ul>
                                    <li><Link to="/"><AiFillGithub /></Link></li>
                                    <li><Link to="/"><AiFillTwitterCircle /></Link></li>
                                    <li><Link to="/"><AiFillLinkedin /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-contact">
                            <div className="contact-img">
                                <img src={contactImg} />
                            </div>
                            <div className="contact-button">Download CV</div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default Contact
