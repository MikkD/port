import React, { useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

function Header() {
    const [state, setState] = useState({
        initialLoad: false,
        clicked: null,
        menuText: "menu"
    });

    const handleMenu = () => {
        // console.log('state.initialLoad', state.initialLoad);
        if (state.initialLoad === false) {
            setState({ initialLoad: null, clicked: true, menuText: "close" });
            console.log('state.initialLoad === false', state.initialLoad);
        } else if (state.isClicked === true) {
            console.log('state.initialLoad', state.initialLoad);
            console.log('state.isClicked ', state.isClicked);
            setState(prevState => ({ clicked: !prevState.clicked, menuText: "close" }))

        } else if (state.isClicked === false) {
            console.log('!state.isClicked ', state.isClicked);
            setState(prevState => ({ clicked: !prevState.clicked, menuText: "menu" }))

        }


    };

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="wrapper">
                        <div className="header-wrapper">
                            <div className="logo">
                                <Link to="/" >NA</Link>
                            </div>
                            <div className="menu">
                                <button onClick={handleMenu} className="menu-button">menu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu />
            </header>
        </React.Fragment>
    )
}

export default Header
