import gsap from 'gsap/gsap-core';
import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from 'react';
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
    const [activeHover, setActiveHover] = useState({ index: -1 });
    const { x, y } = useMousePosition();
    const hRef = useRef();

    console.log('x', x, 'y', y);
    function handleHover(e) {
        const node = e.target;
        const nodeAttrValue = node.getAttribute('name');
        const activeObj = homeAssets[nodeAttrValue];

        setActiveHover(activeObj);
        const textEl = [...document.querySelectorAll('.reg_copy')];
        gsap.to(textEl, { opacity: 0.2, duration: .4, });
    };

    const handleHoverLeave = () => {
        setActiveHover('');
        const textEl = [...document.querySelectorAll('.reg_copy')];
        gsap.to(textEl, { opacity: 1, duration: .4, });
    };


    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="home-wrapper">
                        <article>
                            <div className="hello-div"> -HELLO</div>
                            <h2 ref={hRef}>
                                <span className="reg_copy">I’m </span>
                                <div className="active-wrapper">
                                    <TheImage num={1} activeHover={activeHover} x={x} y={y} />
                                    <strong
                                        name="person"
                                        onMouseOver={handleHover}
                                        onMouseLeave={handleHoverLeave}>Nick Abramov
                                    </strong>
                                </div>
                                <span className="reg_copy"> a passionate </span>
                                <div className="active-wrapper">
                                    <TheImage num={2} activeHover={activeHover} x={x} y={y} />
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
                                    <TheImage num={3} activeHover={activeHover} x={x} y={y} />
                                    <strong
                                        name="sanjose"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>Sunnyvale
                                    </strong>
                                </div>,
                                <span className="reg_copy"> currently working as</span>
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

// Dimension Obj
// const getDimensionObj = (node) => {
//     const rect = node.getBoundingClientRect();
//     console.log('RECT=>', rect);
//     return {
//         width: rect.width,
//         height: rect.height
//     }
// };


// CUSTOM
// const useSize = () => {
//     const [dimensions, setDimensions] = useState({});
//     const [node, setNode] = useState();
//     const ref = useCallback(node => setNode(node), [],)
//     console.log('node', node);
//     useLayoutEffect(() => {
//         if (node) {
//             const res = getDimensionObj(node)
//             const measure = () => setDimensions(res)
//             measure()
//         }
//     }, [node])

//     return [ref, dimensions]

// };



function TheImage({ activeHover: { index, img }, num, x, y, }) {
    // const isActive = index === num;
    // const xPos = isActive ? x : 0;
    // const yPos = isActive ? y : 0;
    // const [ref, { width, height }] = useSize();
    // console.log('ref', ref);
    // console.log('width', width);
    // console.log('height', height);


    return <img
        style={{ transform: `translate(${x > 300 ? x / 2 : x}px, ${y > 450 ? 40 : y}px)` }}
        className={index === num ? "active-img-active" : "active-img"}
        src={index === num ? img.default : ''}
    />


};
