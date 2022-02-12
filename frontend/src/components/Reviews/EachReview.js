import React from "react"

function EachReview({indivReview}) {
    const date = new Date(indivReview.createdAt)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
    return (
        <div className="reviewBody">
            <div className="reviewUser">{indivReview.User.username}</div>
            <div className="reviewDate">{month} {year}</div>
            <div className="reviewItself">{indivReview.review}</div>
        </div>
    )
}

export default EachReview
