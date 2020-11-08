import React, { useEffect, useRef } from 'react'
import './Projects.scss';
import gsap from 'gsap';
import uuid from 'react-uuid';

const projectsInfo = [
    {
        name: 'KRONOS',
        description: 'This 9,380-square-foot Water University facility includes operation equipment that clients will use to learn how to minimize water use. It also has spaces to hold seminars',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
        linkUrl: 'https://www.kronos.com/',
        img: require('../../assets/projects/kronos.png'),
        isClicked: false,
        id: uuid(),
        number: '01'
    },
    {
        name: 'GAF',
        description: 'Maman Corp completed the consolidation of Schneider Chicagoland offices into one space. This project consisted of a complete gut and renovation of the top two floors',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
        linkUrl: 'https://www.gaf.com/',
        img: require('../../assets/projects/gaf.png'),
        isClicked: true,
        id: uuid(),
        number: '02'
    },
    {
        name: 'END CLOTHING',
        description: 'Complete build of administration buildings. The space consisted of meeting spaces, gathering space and much more.',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
        linkUrl: 'https://www.brandshop.com/',
        img: require('../../assets/projects/endclo.png'),
        isClicked: false,
        id: uuid(),
        number: '03'
    },
    {
        name: 'MAMAN',
        description: 'Maman Corp has a strong expertise which allows us to work with all kind of environment structure. We have worked for Ecolab lobby,',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
        linkUrl: 'https://gmeadow.com/',
        img: require('../../assets/projects/brandshop.png'),
        isClicked: false,
        id: uuid(),
        number: '04'
    },
];




function Projects() {
    const lineRef = useRef();

    useEffect(() => {
        gsap.from(lineRef.current, {
            y: -10,
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",

        })
    }, [])

    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <h1>Projects</h1>
                    <div className="projects-wrapper">
                        <nav id="project-nav">
                            <ul>
                                {projectsInfo.map(el => {
                                    return (
                                        <React.Fragment>
                                            <li>
                                                <a href="#">
                                                    <div className="nav-line-block">
                                                        <div className="nav-line-block-number">{el.number}</div>
                                                        <div ref={lineRef} className={el.isClicked ? "nav-line-block-line" : null}></div>
                                                    </div>
                                                </a>
                                            </li>
                                        </React.Fragment>
                                    )
                                })}
                                {/* <li>
                                    <a href="#">
                                        <div className="nav-line-block">
                                            <div className="nav-line-block-number">01</div>
                                            <div ref={lineRef} className="nav-line-block-line"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="nav-line-block">
                                            <div className="nav-line-block-number">02</div>
                                            <div className="nav-line-block"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="nav-line-block">
                                            <div className="nav-line-block-number">03</div>
                                            <div className="nav-line-block-line"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="nav-line-block">
                                            <div className="nav-line-block-number">04</div>
                                            <div className="nav-line-block"></div>
                                        </div>
                                    </a>
                                </li> */}

                            </ul>
                        </nav>


                        {projectsInfo.map(el =>
                            el.isClicked ?
                                (
                                    <React.Fragment>
                                        <div className="project-content">
                                            <div className="project-title">{el.name}</div>
                                            <div className="project-info">
                                                <div className="project-img"></div>

                                                <div className="project-info-block">
                                                    <h5>{el.name}</h5>
                                                    <p>{el.description}</p>
                                                    <ul>
                                                        {el.achives.map(el => <li>{el}</li>)}
                                                    </ul>
                                                    <ul className="tech-stack-list">
                                                        {el.stack.map(el => <li>{el}</li>)}
                                                    </ul>
                                                    <a href={el.linkUrl}>see the project</a>

                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ) : null
                        )}

                        {/* <div className="project-content">
                            <div className="project-title">Kronos</div>
                            <div className="project-info">
                                <div className="project-img"></div>

                                <div className="project-info-block">
                                    <h5>Kronos</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium commodi dignissimos recusandae incidunt maxime necessitatibus optio quibusdam fugit. Impedit accusamus sequi eos voluptatibus quas eum corrupti enim, voluptates ex?</p>
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                    <ul className="tech-stack-list">
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                    <a href="#">Link</a>

                                </div>
                            </div>
                        </div> */}

                        {/* <div className="project-content">
                            <div className="project-title">Kronos</div>
                            <div className="project-info">
                                <div className="project-img"></div>

                                <div className="project-info-block">
                                    <h5>Kronos</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium commodi dignissimos recusandae incidunt maxime necessitatibus optio quibusdam fugit. Impedit accusamus sequi eos voluptatibus quas eum corrupti enim, voluptates ex?</p>
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                    <ul className="tech-stack-list">
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                    <a href="#">Link</a>

                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Projects
