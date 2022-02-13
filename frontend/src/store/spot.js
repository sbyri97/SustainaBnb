import { csrfFetch } from "./csrf";



const SUBMIT_SPOT = 'spot/SUBMITSPOT'
const GET_USER_SPOTS = 'spot/GETUSERSPOTS'
const REMOVE_SPOT = 'spot/REMOVESPOT'
const EDIT_SPOT = 'spot/EDITSPOT'
const SINGLE_SPOT = 'spot/SINGLESPOT'
const GET_ALL_SPOTS = 'spot/GETALLSPOTS'

const submitSpot = (spot) => {
    return {
        type: SUBMIT_SPOT,
        payload: spot
    };
};

const getUserSpots = (userSpots) => {
    return {
        type: GET_USER_SPOTS,
        userSpots
    }
}

const removeSpot = (spotId) => {
    return {
        type: REMOVE_SPOT,
        spotId
    }
}

const editSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        spot
    }
}

const getSingleSpot = (singleSpot) => {
    return {
        type: SINGLE_SPOT,
        singleSpot
    }
}

const getAllListings = (allSpots) => {
    return {
        type: GET_ALL_SPOTS,
        allSpots
    }
}

export const indivSpot = (spotId) => async(dispatch) => {
    const response = await fetch(`/api/spot/${spotId}`);

        const singleSpot = await response.json()
        dispatch(getSingleSpot(singleSpot))
}

export const getAllSpots = () => async(dispatch) => {
    const response = await fetch('/api/spot/');

    const allSpots = await response.json()
    dispatch(getAllListings(allSpots))
}

export const newSpot = (spot) => async(dispatch) => {

    const {
        address, city, state, country, imageUrl, guestCount,
        bedCount, bedroomCount, bathCount, name, price, description,
        propertyType, privacyType, userId
    } = spot;

    const response = await csrfFetch('/api/spot', {
        method: 'POST',
        body: JSON.stringify({
            address, city, state, country, imageUrl, guestCount,
            bedCount, bedroomCount, bathCount, name, price, description,
            propertyType, privacyType, userId
        })
    });

    const data = await response.json()
    dispatch(submitSpot(data.spot));
    return response;
}

export const userListings = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}/spots`);

    if(response.ok) {
        const userSpots = await response.json();
        dispatch(getUserSpots(userSpots));
    }
}

export const deleteSpot = (spotId, userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/spot/delete`, {
        method: 'DELETE',
        body: JSON.stringify({
            spotId
        })
    });

    if(response.ok) {
        const spot = await response.json();
        dispatch(removeSpot(spot))
    }
}

export const updateSpot = (spot, userId, spotId) => async(dispatch) => {
    const {
        address, city, state, country, imageUrl, guestCount,
        bedCount, bedroomCount, bathCount, name, price, description,
        propertyType, privacyType
    } = spot;

    const response = await csrfFetch (`/api/users/${userId}/spot/edit/${spotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            address, city, state, country, imageUrl, guestCount,
            bedCount, bedroomCount, bathCount, name, price, description,
            propertyType, privacyType
        })
    });

    if(response.ok) {
        const listing = await response.json();
        dispatch(editSpot(listing));
        return listing
    }
}

const initialState = { spot: {} }

export default function spotReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.payload;
            return newState;
        case GET_USER_SPOTS:
            newState = {...state}
            newState.spot = {}
            action.userSpots.forEach((userSpot) => {
                newState.spot[userSpot.id] = userSpot;
            });
            return {
                ...state,
                ...newState
            };
        case SINGLE_SPOT:
            newState = {...state}
            newState.spot[action.singleSpot.id] = action.singleSpot
            return newState
        case REMOVE_SPOT:
            newState = {...state, spot: {...state.spot}};
            delete newState.spot[action.spotId]
            return newState
        case EDIT_SPOT:
            newState = {...state, spot: {...state.spot}}
            newState.spot[action.spot.id] = action.spot
            return newState
        case GET_ALL_SPOTS:
            newState = {...state}
            newState.spot = {}
            action.allSpots.forEach((eachSpot) => {
                newState.spot[eachSpot.id] = eachSpot
            })
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
}
