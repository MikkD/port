import React, { useRef, useState, useEffect } from 'react';
import './Home.scss';
import { homeAssets } from './utils.js';


// CUSTOM
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const updateMousePosition = (event) => {
        const xPosition = event.clientX;
        const yPosition = event.clientY;
        setMousePosition({ x: xPosition, y: yPosition })
    };
    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])
    return mousePosition
};


// HOME
const Home = () => {
    const [activeHover, setActiveHover] = useState({ index: -1, img: '' });
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    console.log(x, y);
    const hRef = useRef();

    function handleHover(e) {
        const node = e.target;
        const nodeAttrValue = node.getAttribute('name');
        const activeObj = homeAssets[nodeAttrValue];
        setIsHovered(true);
        setActiveHover(activeObj);
    };

    const handleHoverLeave = () => {
        setIsHovered(false);
        setActiveHover('');
    };


    return (
        <React.Fragment>
            <div className="container">
                {/* <div className="container-main"> */}
                <div className="wrapper">
                    <div className="home-wrapper">
                        <article>
                            <div className="hello-div"> -HELLO</div>
                            <h2 ref={hRef}>
                                <span className={`${isHovered ? 'hover_active' : 'hover-inactive'}`}>I’m </span>

                                <div className="active-wrapper">
                                    <TheImage className="hover-image" num={1} activeHover={activeHover} x={x} y={y} />
                                    <strong
                                        name="person"
                                        onMouseOver={handleHover}
                                        onMouseLeave={handleHoverLeave}>Nick Abramov
                                    </strong>
                                </div>

                                <span className={`${isHovered ? 'hover_active' : 'hover-inactive'}`}> a passionate </span>
                                <div className="active-wrapper">
                                    {/* <TheImage num={2} activeHover={activeHover} x={x} y={y} /> */}
                                    <strong
                                        name="engineer"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>Engineer
                                    </strong>
                                </div>
                                <span className={`${isHovered ? 'hover_active' : 'hover-inactive'}`}> with several years of experience, starting from the concept up to the final result.
                                I'm a branding, typography and design lover.
                                </span>
                            </h2>
                            <h2>
                                <span className={`${isHovered ? 'hover_active' : 'hover-inactive'}`}>I’m based in </span>
                                <div className="active-wrapper">
                                    {/* <TheImage num={3} activeHover={activeHover} x={x} y={y} /> */}
                                    <strong
                                        name="sanjose"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>San Jose
                                    </strong>
                                </div>,
                                <span className={`${isHovered ? 'hover_active' : 'hover-inactive'}`}> currently working as</span>
                                <strong> Frontend Engineer</strong> at <div className="active-wrapper">
                                    <TheImage num={4} activeHover={activeHover} x={x} y={y} />
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



function TheImage({ activeHover: { index, img }, num, x, y, }) {
    return <img
        src={index === num ? img.default : ''}
        // style={{ transform: `translate(${x > 300 ? x / 2 : x}px, ${y > 450 ? 40 : y}px)` }}
        style={{ transform: `translate(${x / 5}px, ${y / 10}px)` }}
        className={index === num ? "active-img-active" : "active-img"}
    />
};
