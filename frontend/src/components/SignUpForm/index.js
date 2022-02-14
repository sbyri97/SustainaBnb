import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignupForm.css'


function SignUpForm () {
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

    const demoClick = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
    }
    return (
        <div className='signUpPageBox'>
            <form onSubmit={handleSubmit} className='signupbox'>
                <ul>
                    {errors.map((error, errorId) =>
                        <li key={errorId}>{error}</li>
                    )}
                </ul>
                <label className='forminputs'>
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label className='forminputs'>
                    <input
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className='forminputs'>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label className='forminputs'>
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfrimPassword(e.target.value)}
                        required
                    />
                </label>
                <div className='submitButtons'>
                    <button className='submitBtn' type='submit'>Sign Up</button>
                </div>
            </form>
            <div className='demoUserBox'>
                <button className='demoUserBtn' onClick={demoClick}>Demo User</button>
            </div>
        </div>
    )
}


export default SignUpForm;
