// actions related to user's info for login

import { csrfFetch } from "./csrf";



const SET_USER = 'session/SETUSER'
const REMOVE_USER = 'session/REMOVEUSER'

const setSessionUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    };
};

const removeSessionUser = () => {
    return {
        type: REMOVE_USER
    };
};

export const login = (user) => async(dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });

    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
}

export const restoreSession = () => async(dispatch) => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setSessionUser(data.user));
    return response;
}

export const signup = (user) => async(dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    const data = await response.json()
    dispatch(setSessionUser(data.user))
    return response;
}

const initialState = { user: null }

export default function sessionReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
}
