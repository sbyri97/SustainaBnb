import { csrfFetch } from "./csrf";

const SUBMIT_BOOKING = 'booking/SUBMITBOOKING'
const USER_BOOKINGS = 'booking/USERBOOKINGS'
const DELETE_BOOKING = 'booking/DELETEBOOKING'


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

const deleteBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
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

export const deleteUserBookings = (bookingId) => async(dispatch) => {

    const response = await csrfFetch(`/api/booking/delete`, {
        method: 'DELETE',
        body: JSON.stringify({
            bookingId
        })
    })

    const data = await response.json()
    dispatch(deleteBooking(data));
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
            action.bookings.forEach((eachUserBooking) => {
                newState.userBookings[eachUserBooking.id] = eachUserBooking
            });
            return newState
        case DELETE_BOOKING: {
            newState = {...state}
            delete newState.userBookings[action.bookingId]
            return newState;
        }
        default:
            return state;
    }
}
