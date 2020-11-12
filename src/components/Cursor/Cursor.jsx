import React, { useRef, useEffect } from 'react';
import './Cursor.scss';

function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', event => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px})`
        })
    }, []);

    return (
        <React.Fragment>
            <div className="app-cursor" ref={cursorRef}></div>
        </React.Fragment>
    )


}

export default Cursor
