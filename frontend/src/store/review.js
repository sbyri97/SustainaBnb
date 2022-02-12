import { csrfFetch } from "./csrf";

const SUBMIT_REVIEW = 'review/SUBMITREVIEW'
const GET_REVIEWS = 'review/GETREVIEWS'
const REMOVE_REVIEWS = 'review/REMOVEREVIEWS'

const submitReview = (reviewData) => {
    return {
        type: SUBMIT_REVIEW,
        reviewData
    };
};

const getReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const removeReviews = (reviewId) => {
    return {
        type: REMOVE_REVIEWS,
        reviewId
    }
}

export const deleteReview = (reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/spot/review/delete`, {
        method: 'DELETE',
        body: JSON.stringify({
            reviewId
        })
    })

    const deleteRev = await response.json()
    dispatch(removeReviews(deleteRev))
    return response;
}


export const newSubmitReview = (userId, spotId, review) => async(dispatch) => {


    const response = await csrfFetch(`/api/spot/${spotId}/review`, {
        method: 'POST',
        body: JSON.stringify({
            userId, spotId, review
        })
    });

    const reviewData = await response.json()
    dispatch(submitReview(reviewData));
    return response;
}

export const receiveReviews = (spotId) => async(dispatch) => {
    const response = await fetch(`/api/spot/${spotId}/review`);

    const reviews = await response.json()
    dispatch(getReviews(reviews))
}


const initialState = { review: {} }

export default function reviewReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SUBMIT_REVIEW:
            newState = {...state, review: {...state.review}};
            newState.review = action.reviewData;
            return newState;
        case GET_REVIEWS:
            newState = {...state}
            newState.review = {}
            action.reviews.forEach((review) => {
                newState.review[review.id] = review;
            });
            return {
                ...state,
                ...newState
            }
        case REMOVE_REVIEWS: {
            newState = {...state, review: {...state.review}};
            delete newState.review[action.reviewId]
            return newState;
        }
        default:
            return state;
    }
}
