import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import './Projects.scss';
import gsap from 'gsap';
import { projectsData } from './utils';

// TODO_1:
// ! Problem : Having one useRef() and passing it in loop, will point to the latest DOM element
// * Solution : Create and array of React.createRef() and use index in map to fill them with relevant DOM element by using callback refs.
// ! Problem : Clicking between projects numbers triggers animation glitch

s
function animateProjects(firstLoad, ...nodeRefs) {
    gsap.from(nodeRefs, {
        duration: firstLoad ? 1 : 0.3,
        y: firstLoad ? 10 : 5,
        delay: firstLoad ? .3 : .1,
        opacity: 0,
        ease: "power3.inOut",
        stagger: { amount: firstLoad ? 0.2 : 0.1 }
    });
};




function Projects() {
    const [selectedProject, setSelectedProject] = useState(projectsData['1']);
    const projectContentRef = useRef();
    const imgRef = useRef();
    const infoBlockRef = useRef();
    const tasksRef = useRef();
    const stackList = useRef();
    const refsArr = [imgRef, infoBlockRef, tasksRef, stackList];
    console.log('RENDER', refsArr);

    useEffect(() => {
        console.log('uSEEFFECT1');
        const refsArr = [imgRef.current, infoBlockRef.current, tasksRef.current, stackList.current];
        animateProjects(true, ...refsArr)
    }, []);

    useEffect(() => {
        console.log('uSEEFFECT2, selectedProjects clicked');
        const refsArr = [imgRef.current, infoBlockRef.current, tasksRef.current, stackList.current]
        animateProjects(false, ...refsArr)
    }, [selectedProject]);

    const handleClick = (id) => setSelectedProject(projectsData[`${id}`])

    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <h1>Projects</h1>
                    <div className="projects-wrapper">
                        <nav id="project-nav">
                            <ul>
                                {Object.keys(projectsData).map(el => {
                                    return (
                                        <li key={el}>
                                            <div className="nav-line-block">
                                                <div onClick={() => handleClick(el)} className="nav-line-block-number">{el}</div>
                                                <div className={selectedProject.number === el ? 'nav-line-block-line' : 'not-active-line'}></div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div ref={projectContentRef} className="project-content">
                            <div className="project-info">
                                <a href={selectedProject.linkUrl} className="project-img-link">
                                    <div ref={imgRef} style={{ backgroundImage: `url(${selectedProject.img.default})` }} className="project-img"></div>
                                    <div className="project-img-link-title">See the project</div>
                                </a>
                                <div ref={infoBlockRef} className="project-info-block">
                                    <div className="project-title">{selectedProject.name}</div>
                                    <p>{selectedProject.description}</p>
                                    <ul ref={tasksRef}>
                                        {selectedProject.achives.map((el, index) => <li key={index}>{el}</li>)}
                                    </ul>
                                    <ul ref={stackList} className="tech-stack-list">
                                        {selectedProject.stack.map((el, index) => <li key={index}>{el}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment >
    )
}

export default Projects
