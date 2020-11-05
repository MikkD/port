import React, { useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { withRouter } from 'react-router-dom';

function Header() {
    const [menuIsClicked, setMenuIsClicked] = useState(false);



    const handleMenu = () => {
        setMenuIsClicked(prevState => !prevState);
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
                                {/* <button onClick={handleMenu} className="menu-button">{menuIsClicked ? "close" : "menu"}</button> */}
                                <div onClick={handleMenu} className={menuIsClicked ? "hamburger is-active" : "hamburger"} id="hamburger-9">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu menuIsClicked={menuIsClicked} handleMenu={handleMenu} />
            </header>
        </React.Fragment>
    )
}

export default withRouter(Header)
