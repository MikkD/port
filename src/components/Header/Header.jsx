import React, { useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { withRouter } from 'react-router-dom';

function Header() {
    const [state, setState] = useState({
        initialLoad: false,
        isClicked: false,
        menuText: "menu"
    });

    const handleMenu = () => {
        // console.log('state.initialLoad', state.initialLoad);
        if (state.initialLoad === false) {
            setState({ initialLoad: null, isClicked: true, menuText: "close" });
            console.log('1');
        } else if (state.isClicked) {
            setState(prevState => ({ isClicked: !prevState.isClicked, menuText: "menu" }))
            console.log('2');
        } else if (!state.isClicked) {
            setState(prevState => ({ isClicked: !prevState.isClicked, menuText: "close" }))
            console.log('3');
        }
    };

    // Work on Disable


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
                                <button onClick={handleMenu} className="menu-button">{state.menuText}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu state={state} handleMenu={handleMenu} />
            </header>
        </React.Fragment>
    )
}

export default withRouter(Header)
