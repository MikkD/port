import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Menu() {
    return (
        <React.Fragment>
            <div className="hamburger-menu">
                <div className="second-background-menu"></div>
                <div className="menu-layer">
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li><a href=""><AiFillGithub /></a></li>
                                    <li><a href=""><AiFillTwitterCircle /></a></li>
                                    <li><a href=""><AiFillLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Menu
