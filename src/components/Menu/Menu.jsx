import React, { useEffect, useRef } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import gsap from 'gsap';



function Menu({ menuIsClicked, handleMenu }) {
    // Animated Nodes
    const hamburgerMenu = useRef();
    const menuLayer = useRef();
    const secondBgLayer = useRef();
    const Link1 = useRef();
    const Link2 = useRef();
    const Link3 = useRef();
    const SocialLink1 = useRef();
    const SocialLink2 = useRef();
    const SocialLink3 = useRef();

    useEffect(() => {

        if (menuIsClicked) {
            gsap.to(hamburgerMenu.current, {
                duration: 1,
                css: { display: "block" }
            });
            gsap.from([secondBgLayer.current, menuLayer.current], {
                duration: 0.8,
                height: '0%',
                transformOrigin: "right top",
                skewY: 2.4,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.2
                }
            });

            gsap.to([secondBgLayer.current, menuLayer.current], {
                duration: 1,
                height: '100%',
                ease: "power3.inOut",
                opacity: 1,
                stagger: 0.09
            })
            gsap.from([Link1.current, Link2.current, Link3.current], {
                duration: 0.8,
                y: 120,
                delay: .1,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.2
                }
            });
            gsap.from([SocialLink1.current, SocialLink2.current, SocialLink3.current], {
                duration: 1,
                y: 150,
                delay: .2,
                opacity: 1,
                ease: "power3.inOut",
                stagger: {
                    amount: .2
                }
            });
        }
        else {
            gsap.to([menuLayer.current, secondBgLayer.current], {
                duration: .9,
                height: 0,
                ease: "power3.inOut",
                stagger: 0.07
            })
            gsap.to(hamburgerMenu.current, {
                duration: 1,
                css: { display: "none" }
            })
        }

    }, [menuIsClicked])

    const handleHover = (e) => {
        gsap.to(e.target, {
            duration: .3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut",
        });
    };
    const handleHoverOut = (e) => {
        gsap.to(e.target, {
            duration: .3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut",
        });
    };


    return (
        <React.Fragment>
            <div ref={hamburgerMenu} className="hamburger-menu">
                <div ref={secondBgLayer} className="second-background-menu"></div>
                <div ref={menuLayer} className="menu-layer">
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li><Link onMouseEnter={handleHover} onMouseLeave={handleHoverOut} ref={Link1} onClick={handleMenu} to="/about">About</Link></li>
                                        <li><Link onMouseEnter={handleHover} onMouseLeave={handleHoverOut} ref={Link2} onClick={handleMenu} to="/projects">Projects</Link></li>
                                        <li><Link onMouseEnter={handleHover} onMouseLeave={handleHoverOut} ref={Link3} onClick={handleMenu} to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li><Link ref={SocialLink1} to="/"><AiFillGithub /></Link></li>
                                    <li><Link ref={SocialLink2} to="/"><AiFillTwitterCircle /></Link></li>
                                    <li><Link ref={SocialLink3} to="/"><AiFillLinkedin /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Menu
