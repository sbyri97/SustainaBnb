import { csrfFetch } from "./csrf";



const SUBMIT_SPOT = 'spot/SUBMITSPOT'
const GET_USER_SPOTS = 'spot/GETUSERSPOTS'

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

export const userListings = () => async(dispatch) => {
    const response = await fetch('/api/spot');

    if(response.ok) {
        const userSpots = await response.json();
        dispatch(getUserSpots(userSpots));
    }
}

const initialState = { spot: [] }

export default function spotReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.payload;
            return newState;
        case GET_USER_SPOTS:
            const userSpots = {}
            action.userSpots.forEach((userSpot) => {
                userSpots[userSpot.id] = userSpot;
            });
            return {
                ...state,
                ...userSpots,
                spot: action.userSpots
            };
        default:
            return state;
    }
}
