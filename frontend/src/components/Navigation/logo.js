import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/sustainaBnb-logo.png'

function Logo() {
    return (
        <div className="logoOuterMost">
            <div className="logoOuter">
                <div className="logoInner">
                    <div className="logo">
                        <NavLink to='/' className="navLinkDiv">
                            <img
                            className="logoImg"
                            src={logo} alt="logo" />
                            <h2 className="pageName">SustainaBnb</h2>
                        </NavLink>
                        {/* <NavLink to='/' className="navLinkH3">
                            <h3>Explore Sustainable Living</h3>
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;
