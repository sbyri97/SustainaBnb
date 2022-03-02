import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session';
import './LoginForm.css'


function LoginForm () {
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

    const demoClick = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
    }

    return(
        <div>
            <form className='formMainDiv' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, errorId) => (
                    <li key={errorId}>{error}</li>
                    ))}
                </ul>
                <div className='formWelcomeBox'>
                    <h2 className='formWelcomeText'>Welcome to SustainaBnb</h2>
                </div>
                <div>
                    <label className='forminputs'>
                        <input
                            type="text"
                            placeholder='Username or Email'
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='submitButtons'>
                    <button className='submitBtn' type='submit'>Log In</button>
                </div>
            </form>
            <div className='demoUserBox'>
                <button className='demoUserLogBtn' onClick={demoClick}>Demo User</button>
            </div>
        </div>
    );
}


export default LoginForm
