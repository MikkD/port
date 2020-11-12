import { _checkPlugin } from 'gsap/gsap-core';
import React, { useRef, useState, useEffect } from 'react';
import './Home.scss';

const homeAssets = [
    {
        name: 'person',
        img: require('../../assets/home/me.jpg'),
        isActive: false,
        index: 0,
    },
    {
        name: 'engineer',
        img: require('../../assets/home/fe.png'),
        isActive: false,
        index: 1,
    },
    {
        name: 'san-jose',
        img: require('../../assets/home/sj.png'),
        isActive: false,
        index: 2,
    },
    {
        name: 'hogarth',
        img: require('../../assets/home/hg.png'),
        isActive: false,
        index: 3,
    }
];



const Home = () => {
    const [state, setState] = useState(homeAssets);



    function handleHover(e) {
        const node = e.target;
        const nodeAttrValue = node.getAttribute('name');
        console.log('HOVER=>NODE_VALUE ', nodeAttrValue);
        setState(prevState => prevState.map(el => {
            if (el.name === nodeAttrValue) {
                return {
                    ...el,
                    isActive: true
                }
            } else {
                return {
                    ...el,
                    isActive: false
                }
            }
        }))

    };

    const handleHoverLeave = (e) => {
        const node = e.target;
        const nodeAttrValue = node.getAttribute('name');
        console.log('MOUSE_LEAVE', node);
        setState(prevState => prevState.map(el => {
            if (el.name === nodeAttrValue) {
                return {
                    ...el,
                    isActive: false
                }
            }
            return el
        }))

    };






    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="home-wrapper">
                        <article>

                            <span className="hello-span"> -HELLO</span>
                            <h2>I’m
                                <span className="active-wrapper">
                                    <TheImage state={state} index={0} />
                                    <strong
                                        name="person"
                                        onMouseOver={handleHover}
                                        onMouseLeave={handleHoverLeave}> Nick Abramov
                                    </strong>
                                </span>
                                    a passionate
                                    <span className="active-wrapper">
                                    <TheImage state={state} index={1} />
                                    <strong
                                        name="engineer"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}> Engineer
                            </strong>
                                </span>
                            with several years of experience, starting from the concept up to the final result. I'm a branding, typography and design lover.</h2>
                            <h2>I’m based in
                            <span className="active-wrapper">
                                    <TheImage state={state} index={2} />
                                    <strong
                                        name="san-jose"
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverLeave}>Sunnyvale
                                    </strong>
                                </span>, currently working as
                                <strong> Frontend Engineer</strong> at

                                <span className="active-wrapper">
                                    <TheImage state={state} index={3} />
                                    <strong>
                                        <a
                                            name="hogarth"
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleHoverLeave}
                                            href="https://www.hogarthww.com/"> Hogarth
                                        </a>
                                    </strong>
                                </span>.
                            </h2>
                        </article>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home


function TheImage({ state, index }) {
    const activeObj = state.find(el => el.isActive);
    return activeObj && activeObj.index === index ? <img src={activeObj.img.default} /> : null

};
