import React, {useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './Navigation.css'
import Logo from "./logo"

function Navigation ({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);



    let authLinks;
    if (sessionUser) {
        authLinks = (
            <div className="navHeader">
                <Logo />
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        authLinks = (
            <div className="navHeader">
                <Logo />
                <div className="login-btns-div">
                    <LoginFormModal />
                    <div className="signUpDiv">
                        <NavLink className='signButton' to="/signup">SIGN UP</NavLink>
                    </div>
                    <div className="navbar-abt-me-lo">
                        <NavLink to={'/aboutme'}>ABOUT ME</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <ul>
            <li>
                {isLoaded && authLinks}
            </li>
        </ul>
    )
}

export default Navigation
