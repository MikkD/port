import React, { useEffect, useRef } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import gsap from 'gsap';



function Menu({ state, handleMenu }) {
    // Animated Nodes
    const hiddenMenu = useRef();
    const revealMenuLayer = useRef();
    const revealSecondBg = useRef();
    const Link1 = useRef()
    const Link2 = useRef()
    const Link3 = useRef()

    useEffect(() => {
        if (state.isClicked && !state.initialLoad) {

            hiddenMenu.current.style.display = "block"
        } else if (state.isClicked === false && !state.initialLoad) {
            console.log('revealMenuLayer', revealMenuLayer);
            console.log('revealMenuLayer.current', revealMenuLayer.current);
            // gsap.to([revealMenuLayer.current, revealSecondBg.current], {
            //     duration: .9,
            //     height: 0,
            //     ease: "power3.inOut",
            //     stagger: 0.07
            // })
            // gsap.to(hiddenMenu.current, {
            //     duration: 1,
            //     css: { display: "none" }
            // })
            hiddenMenu.current.style.display = "none"
        }
        // hiddenMenu.current.style.display = state.isClicked ? "block" : "none"
    }, [state])

    return (
        <React.Fragment>
            <div ref={hiddenMenu} className="hamburger-menu">
                <div ref={revealSecondBg} className="second-background-menu"></div>
                <div ref={revealMenuLayer} className="menu-layer">
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li><Link ref={Link1} onClick={handleMenu} to="/about">About</Link></li>
                                        <li><Link ref={Link2} onClick={handleMenu} to="/projects">Projects</Link></li>
                                        <li><Link ref={Link3} onClick={handleMenu} to="/contact">Contact</Link></li>
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
