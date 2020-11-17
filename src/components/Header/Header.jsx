import React, { useState } from 'react'
import './Header.scss';
import Menu from '../Menu/Menu';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
    const [menuIsClicked, setMenuIsClicked] = useState(false);
    const handleMenu = () => setMenuIsClicked(prevState => !prevState);

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="wrapper">
                        <div className="header-wrapper">
                            <div className="logo">
                                <Link to="/" onClick={menuIsClicked && handleMenu} >
                                    <img style={{ width: '50px', height: '50px' }} src={logo} />
                                </Link>
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
