import React, {useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './Navigation.css'

function Navigation ({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let authLinks;
    if (sessionUser) {
        authLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        authLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink to='/' >Home</NavLink>
                {isLoaded && authLinks}
            </li>
        </ul>
    )
}

export default Navigation
