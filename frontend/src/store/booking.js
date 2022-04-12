import { csrfFetch } from "./csrf";

const SUBMIT_BOOKING = 'booking/SUBMITBOOKING'
const USER_BOOKINGS = 'booking/USERBOOKINGS'

const submitBooking = (bookingInfo) => {
    return {
        type: SUBMIT_BOOKING,
        bookingInfo
    }
}

const user_bookings = (bookings) => {
    return {
        type: USER_BOOKINGS,
        bookings
    }
}


export const newBooking = (userId, spotId, startDate, endDate) => async(dispatch) => {

    const response = await csrfFetch('/api/booking/', {
        method: 'POST',
        body: JSON.stringify({
            userId, spotId, startDate, endDate
        })
    });

    const data = await response.json()
    dispatch(submitBooking(data));
    return data;
}

export const userBookings = (userId) => async(dispatch) => {

    const response = await fetch(`/api/booking/${userId}`)

    const data = await response.json()
    dispatch(user_bookings(data));
    return data;
}

const initialState = { bookings: {}, userBookings: {} }

export default function bookingReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_BOOKING:
            newState = {...state}
            newState.bookings = action.bookingInfo
            return newState
        case USER_BOOKINGS:
            newState = {...state}
            newState.bookings = action.bookingInfo
            return newState
        default:
            return state;
    }
}
