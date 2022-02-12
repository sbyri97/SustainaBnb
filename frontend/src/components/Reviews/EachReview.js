import React from "react"
import { useDispatch } from "react-redux";
import './Review.css'
import *  as reviewActions from '../../store/review'


function EachReview({indivReview, sessionUser}) {
    const date = new Date(indivReview.createdAt)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
    const dispatch = useDispatch()

    const onDelete = (e) => {
        e.preventDefault()
        dispatch(reviewActions.deleteReview(indivReview.id))
    }
    return (
        <div className="reviewBody">
            <div className="revWUser">
                <div className="revUserLogo">
                    <i className="far fa-user-circle" />
                </div>
                <div className="revUserDate">
                    <div className="reviewUser">{indivReview.User.username}</div>
                    <div className="reviewDate">{month} {year}</div>
                </div>
            </div>
            <div className="reviewItself">{indivReview.review}</div>
            {sessionUser.id === indivReview.userId ?
            (
            <div className="revDelBtn">
                <button className="usrDelBtn"
                onClick={onDelete}>Delete</button>
            </div>
            ) : null}
        </div>
    )
}

export default EachReview
