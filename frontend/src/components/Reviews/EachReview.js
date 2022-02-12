import React from "react"
import './Review.css'


function EachReview({indivReview, sessionUser}) {
    const date = new Date(indivReview.createdAt)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()

    const onDelete = () => {
        
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
                <button className="usrDelBtn">Delete</button>
            </div>
            ) : null}
        </div>
    )
}

export default EachReview
