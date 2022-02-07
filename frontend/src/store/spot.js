import { csrfFetch } from "./csrf";

const SUBMIT_SPOT = 'spot/SUBMITSPOT'

const submitSpot = (spot) => {
    return {
        type: SUBMIT_SPOT,
        payload: spot
    };
};

export const newSpot = (spot) => async(dispatch) => {
    const {
        address, city, state, country, guestCount,
        bedCount, bedroomCount, bathCount, name, price, description,
        isApartment, isHouse, isEntirePlace, isPrivateRoom
    } = spot;

    const response = await csrfFetch('/api/spot', {
        method: 'POST',
        body: JSON.stringify({
            address, city, state, country, guestCount,
            bedCount, bedroomCount, bathCount, name, price, description,
            isApartment, isHouse, isEntirePlace, isPrivateRoom
        })
    });

    const data = await response.json()
    dispatch(submitSpot(data.spot));
    return response;
}

const initialState = { spot: null }

export default function spotReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.payload;
            return newState;
        default:
            return state;
    }
}
