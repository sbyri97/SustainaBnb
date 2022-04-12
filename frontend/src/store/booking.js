import { csrfFetch } from "./csrf";

const SUBMIT_BOOKING = 'booking/SUBMITBOOKING'

const submitBooking = (bookingInfo) => {
    return {
        type: SUBMIT_BOOKING,
        bookingInfo
    }
}


export const newBooking = (info) => async(dispatch) => {
    const {
        userId,
        spotId,
        startDate,
        endDate
    } = info

    const response = await csrfFetch('/api/booking/', {
        method: 'POST',
        body: JSON.stringify({
            userId, spotId, startDate, endDate
        })
    });

    const data = await response.json()
    dispatch(submitBooking(data));
    return response;
}

const initialState = { bookings: {} }

export default function bookingReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_BOOKING:
            newState = {...state}
            newState.bookings = action.bookingInfo
            return newState
        default:
            return state;
    }
}
