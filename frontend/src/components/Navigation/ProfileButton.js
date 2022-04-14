import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import './Navigation.css'


function ProfileButton ({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        if(!menu) return;
        setMenu(true);
    };

    useEffect(() => {
        if(!menu) return;

        const closeMenu = () => {
            setMenu(false)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [menu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        let path = '/'
        history.push(path)
    };

    return (
        <div className="menuDetails">
            <button className="menuUserLogo" onClick={e => setMenu(!menu)}>
                <div className="profileUsername">{user.username}</div>
                <i className="far fa-user-circle" />
            </button>
            {menu && (
                <div className="navbar-menu-div">
                    <div className="navbar-myprofile-btn">
                        <NavLink to={`/users/${user.id}`}>My Account</NavLink>
                    </div>
                    <button className="profileLogout" onClick={logout}>Log Out</button>
                    <div className="navbar-abt-me">
                        <NavLink to={'/aboutme'}>About Me</NavLink>
                    </div>
                </div>
            )}
            <div className="profile-content">
                {/* <div>
                    <button className="profileLogout" onClick={logout}>Log Out</button>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileButton;
