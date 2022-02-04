import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom'
import './LoginForm.css'


function LoginFormPage () {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if(data && data.errors) setErrors(data.errors)
            });
    }

    if(sessionUser) {
        return (
            <Redirect to='/' />
        );
    }

    return(
        <form onSubmit={{handleSubmit}}>
            <ul>
                {errors.map((error, errorId) => <li key={errorId}>
                    {error}
                </li>)}
            </ul>
            <label>
                Username or Email
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                 />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type='submit'>Log In</button>
        </form>
    );
}


export default LoginFormPage
