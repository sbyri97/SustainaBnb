import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import './Navigation.css'


function ProfileButton ({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        if(menu) return;
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
    };

    return (
        <div className="menuDetails">
            <div className="menuUserLogo">
                <i className="far fa-user-circle" />
            </div>
            <div className="profile-content">
                <div className="profileUsername">{user.username}</div>
                <div>
                    <button className="profileLogout" onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileButton;
