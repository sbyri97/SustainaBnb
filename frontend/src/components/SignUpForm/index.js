import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignupForm.css'


function SingUpForm () {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfrimPassword] = useState("")
    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return(dispatch(sessionActions.signup({ username, email, password })))
                .catch(async (res) => {
                    const data = await res.json();
                    if(data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors(['Both passwords must match'])
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>

            </ul>
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Email
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type='submit'>Sign Up</button>
        </form>
    )
}


export default SingUpForm;
