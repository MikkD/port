import gsap from 'gsap/gsap-core';
import { _checkPlugin } from 'gsap/gsap-core';
import React, { useRef, useState, useEffect } from 'react';
import './Home.scss';


const homeAssets = {
    person: {
        img: require('../../assets/home/me1.jpg'),
        index: 1,
    },
    engineer: {
        img: require('../../assets/home/fe.png'),
        index: 2,
    },
    sanjose: {
        img: require('../../assets/home/sj.png'),
        index: 3,
    },
    hogarth: {
        img: require('../../assets/home/hg.png'),
        index: 4,
    }
};




const Home = () => {
    const [activeHover, setActiveHover] = useState({ index: -1 });



    function handleHover(e) {
        const node = e.target;
        const nodeAttrValue = node.getAttribute('name');
        const activeObj = homeAssets[nodeAttrValue];
        setActiveHover(activeObj)


        const textEl = [...document.querySelectorAll('.reg_copy')];
        gsap.to(textEl, {
            opacity: 0.2,
            duration: .7,
            ease: "power3.inOut",
        })
    };



    const handleHoverLeave = () => {
        setActiveHover('');
        const textEl = [...document.querySelectorAll('.reg_copy')];
        gsap.to(textEl, {
            opacity: 1,
            duration: .3,
            ease: "power3.inOut",
        });

    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="home-wrapper">
                        <article>
                            <div className="hello-div"> -HELLO</div>
                            <h2>
                                <span className="reg_copy">I’m </span>
                                <div className="active-wrapper">
                                    <TheImage num={1} activeHover={activeHover} />
                                    <strong
                                        name="person"
                                        onMouseOver={handleHover}
                                        onMouseLeave={handleHoverLeave}>Nick Abramov
                                    </strong>
                                </div>
                                <span className="reg_copy"> a passionate </span>
                                <div className="active-wrapper">
                                    <TheImage num={2} activeHover={activeHover} />
                                    <strong
                                        name="engineer"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>Engineer
                                    </strong>
                                </div>
                                <span className="reg_copy"> with several years of experience, starting from the concept up to the final result.
                                I'm a branding, typography and design lover.
                                </span>
                            </h2>
                            <h2>
                                <span className="reg_copy">I’m based in </span>
                                <div className="active-wrapper">
                                    <TheImage num={3} activeHover={activeHover} />
                                    <strong
                                        name="sanjose"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>Sunnyvale
                                    </strong>
                                </div>,
                                <span className="reg_copy"> currently working as</span>
                                <strong> Frontend Engineer</strong> at <div className="active-wrapper">
                                    <TheImage num={4} activeHover={activeHover} />
                                    <strong>
                                        <a
                                            name="hogarth"
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleHoverLeave}
                                            href="https://www.hogarthww.com/">Hogarth</a>

                                    </strong>
                                </div>.
                            </h2>
                        </article>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home


function TheImage({ activeHover: { index, img }, num }) {

    return <img className={index === num ? "active-img-active" : "active-img"} src={index === num ? img.default : ''} />


};
