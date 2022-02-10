import { csrfFetch } from "./csrf";



const SUBMIT_SPOT = 'spot/SUBMITSPOT'
const GET_USER_SPOTS = 'spot/GETUSERSPOTS'
const REMOVE_SPOT = 'spot/REMOVESPOT'
const EDIT_SPOT = 'spot/EDITSPOT'

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



export const newSpot = (spot) => async(dispatch) => {

    const {
        address, city, state, country, guestCount,
        bedCount, bedroomCount, bathCount, name, price, description,
        isApartment, isHouse, isEntirePlace, isPrivateRoom, userId
    } = spot;

    const response = await csrfFetch('/api/spot', {
        method: 'POST',
        body: JSON.stringify({
            address, city, state, country, guestCount,
            bedCount, bedroomCount, bathCount, name, price, description,
            isApartment, isHouse, isEntirePlace, isPrivateRoom, userId
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
        console.log(spot)
        dispatch(removeSpot(spot))
    }
}

export const updateSpot = (spot, userId, spotId) => async(dispatch) => {
    const {
        address, city, state, country, guestCount,
        bedCount, bedroomCount, bathCount, name, price, description,
        isApartment, isHouse, isEntirePlace, isPrivateRoom
    } = spot;

    const response = await csrfFetch (`/api/users/${userId}/spot/edit/${spotId}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            address, city, state, country, guestCount,
            bedCount, bedroomCount, bathCount, name, price, description,
            isApartment, isHouse, isEntirePlace, isPrivateRoom
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
        case REMOVE_SPOT:
            newState = {...state};
            delete newState[action.spot]
            return newState
        case EDIT_SPOT:
            newState = {...state}
            newState.spot[action.spot.id] = action.spot
            return newState
        default:
            return state;
    }
}
