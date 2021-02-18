import React, { useState, useEffect, useRef } from 'react'
import './Projects.scss';
import gsap from 'gsap';
import { projectsData } from './utils';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCsswizardry } from 'react-icons/si';
import { FaCcStripe } from 'react-icons/fa';
import { SiMaterialUi } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { CgPushRight } from 'react-icons/cg';
import { CgArrowLongRight } from 'react-icons/cg';
import { CgArrowTopRightR } from 'react-icons/cg';



// TODO_1:
// ! Problem : Having one useRef() and passing it in loop, will point to the latest DOM element
// * Solution : Create and array of React.createRef() and use index in map 
//* to fill them with relevant DOM element by using callback refs.
// ! Problem : Clicking between projects numbers triggers animation glitch


function animateProjects(firstLoad, ...nodeRefs) {
    gsap.from(nodeRefs, {
        duration: firstLoad ? 1 : 0.5,
        y: firstLoad ? 10 : 6,
        delay: firstLoad ? .3 : .1,
        opacity: 0,
        ease: "power3.inOut",
        stagger: { amount: firstLoad ? 0.2 : 0.1 }
    });
};




function Projects() {
    const [selectedProject, setSelectedProject] = useState(projectsData['1']);
    const projectContentRef = useRef();
    const titleRef = useRef();
    const imgRef = useRef();
    const infoBlockRef = useRef();
    const tasksRef = useRef();
    const stackList = useRef();
    const refsArr = [titleRef, imgRef, infoBlockRef, tasksRef, stackList];
    console.log('RENDER', refsArr);

    useEffect(() => {
        console.log('uSEEFFECT1');
        const refsArr = [titleRef.current, imgRef.current, infoBlockRef.current, tasksRef.current, stackList.current];
        animateProjects(true, ...refsArr)
    }, []);

    useEffect(() => {
        console.log('uSEEFFECT2, selectedProjects clicked');
        const refsArr = [titleRef.current, imgRef.current, infoBlockRef.current, tasksRef.current, stackList.current]
        animateProjects(false, ...refsArr)
    }, [selectedProject]);

    const handleClick = (id) => setSelectedProject(projectsData[`${id}`])

    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <h3>Projects</h3>
                    <div className="projects-wrapper">
                        <nav id="project-nav">
                            <ul>
                                {Object.keys(projectsData).map(el => {
                                    return (
                                        <li
                                            key={el}
                                            onClick={() => handleClick(el)}
                                            className={selectedProject.number === el ? 'nav-line-block-line' : 'not-active-line'}
                                        > {el}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div ref={projectContentRef} className="project-content">
                            <div className="project-info">
                                <a href={selectedProject.linkUrl} className="project-img-link">
                                    <div ref={imgRef} style={{ backgroundImage: `url(${selectedProject.img.default})` }} className="project-img">
                                        <div className="project-img-link-layer"></div>
                                        <div className="project-img-link-title">See the project</div>
                                    </div>
                                </a>
                                <div ref={infoBlockRef} className="project-info-block">
                                    <div ref={titleRef} className="project-title">{selectedProject.name}</div>
                                    <p>{selectedProject.description}</p>
                                    <ul className="achievements-list" ref={tasksRef}>
                                        {selectedProject.achives.map((el, index) => <li key={index}> {el}</li>)}
                                    </ul>
                                    <ul ref={stackList} className="tech-stack-list">
                                        {selectedProject.stack.map((el, index) => <li style={{ color: el.color }} key={index}>{el.icon}</li>)}
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
