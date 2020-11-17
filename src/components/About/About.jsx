import React, { useRef, useEffect } from 'react';
import './About.scss';
import gsap from 'gsap';
import '../../styles/spinkit.scss';

function About() {

    const spanRef = useRef();
    const smallTitleRef = useRef();
    const titleRef = useRef();
    const pRef = useRef();
    const imgRef = useRef()

    useEffect(() => {
        const transformString = (node, str) => {
            for (let i = 0; i < str.length; i++) {
                node.current.innerHTML += `<span class="animated-span">${str[i]}</span>`;
            }
        }
        transformString(spanRef, 'Nick Abramov')
    }, [])

    useEffect(() => {
        const allSpans = [...document.querySelectorAll('.animated-span')]

        gsap.from([imgRef.current, smallTitleRef.current, titleRef.current, pRef.current], {
            duration: 0.5,
            y: 15,
            delay: .2,
            opacity: 0,
            ease: "power3.inOut",
            stagger: {
                amount: 0.2
            }
        })
    }, []);


    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="about-wrapper">
                        <div className="about-info">
                            <h3 ref={spanRef}></h3>
                            <h1 ref={titleRef}>Frontend Engineer</h1>
                            <p ref={pRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequuntur iure, laborum nihil adipisci nulla eligendi sequi, sunt voluptate porro iusto eos repudiandae numquam laudantium amet minus temporibus totam. Dolor?</p>
                            <div className="buttons">
                                <button>Resume</button>
                                <button>ContactMe</button>
                            </div>
                        </div>
                        <div ref={imgRef} className="about-image"></div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default About
