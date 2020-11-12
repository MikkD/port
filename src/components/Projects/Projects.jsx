import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import './Projects.scss';
import gsap from 'gsap';
import { projectsData } from './utils';

// TODO_1:
// ! Problem : Having one useRef() and passing it in loop, will point to the latest DOM element
// * Solution : Create and array of React.createRef() and use index in map to fill them with relevant DOM element by using callback refs.






function Projects() {
    const [selectedProject, setSelectedProject] = useState(projectsData['1']);
    const lineRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    const [linePosition, setLinePosition] = useState('top');
    const prevClickedNumber = useRef(1)


    useEffect(() => {
        const prevClickedLine = lineRefs[prevClickedNumber.current - 1];
        const currentClickedLine = lineRefs[prevClickedNumber.current];
        // console.log('currentClickedLine', currentClickedLine);
        // console.log('prevClickedLine', prevClickedLine);

    }, [selectedProject])


    const handleClick = (id) => {
        prevClickedNumber.current = selectedProject.number
        const currentClickedLine = lineRefs[prevClickedNumber.current - 1];

        console.log('currentClickedLine', currentClickedLine.style.top = `${25 * selectedProject.number}`);
        console.log('currentClickedLine', currentClickedLine.style.height = `100%`);

        setSelectedProject(projectsData[`${id}`]);
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <h1>Projects</h1>
                    <div className="projects-wrapper">
                        <nav id="project-nav">
                            <ul>
                                {Object.keys(projectsData).map((el, index) => {
                                    return (
                                        <li key={el}>
                                            <a href="#">
                                                <div className="nav-line-block">
                                                    <div onClick={() => handleClick(el)} className="nav-line-block-number">{el}</div>
                                                    <div
                                                        ref={domEl => lineRefs[index] = domEl}
                                                        className={selectedProject.number === el ? 'nav-line-block-line' : 'not-active-line'}
                                                    ></div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div className="anime-wrapper">
                            <div className="project-content">
                                <div className="project-title">{selectedProject.name}</div>
                                <div className="project-info">
                                    <div style={{ backgroundImage: `url(${selectedProject.img.default})` }} className="project-img"></div>
                                    <div className="project-info-block">
                                        <h5>{selectedProject.name}</h5>
                                        <p>{selectedProject.description}</p>
                                        <ul>
                                            {selectedProject.achives.map((el, index) => <li key={index}>{el}</li>)}
                                        </ul>
                                        <ul className="tech-stack-list">
                                            {selectedProject.stack.map((el, index) => <li key={index}>{el}</li>)}
                                        </ul>
                                        <a href={selectedProject.linkUrl}>see the project</a>
                                    </div>
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
