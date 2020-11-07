import React, { useRef, useEffect } from 'react';
import './Home.scss';

function Home() {

    return (
        <React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <div className="home-wrapper">
                        <article>
                            <span className="hello-span"> -HELLO</span>
                            <h2>I’m <strong>Nick Abramov</strong> a passionate <strong>Engineer</strong> with several years of experience, starting from the concept up to the final result. I'm a branding, typography and design lover.</h2>
                            <h2>I’m based in <strong>Sunnyvale</strong> , currently working as <strong>Frontend Engineer</strong> at <strong>Hogarth</strong>.</h2>
                        </article>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
