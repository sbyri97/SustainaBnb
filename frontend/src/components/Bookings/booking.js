import React, {useState, useState} from "react";
import { useDispatch, useSelector } from "react-redux";


export const Bookings = ({spotId, spotUserId}) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showBooking, setShowBooking] = useState(false)

    const onClick = (e) => {
        e.preventDefault()
        setShowBooking(!showBooking)
    }

    return (
        <div className="booking-main-div">
            {sessionUser !== spotUserId ? (
            <div className="postReviewOuterMostBox">
                {/* <div className="revBtnDiv">
                    <button className="postReviewOpenBtn" onClick={onClick}>Post A Review</button>
                </div>
                {showReviewBox ?
                <ReviewBox
                review={review}
                setReview={setReview}
                sessionUser={sessionUser}
                spotId={spotId} */}
                />
                : null}
            </div>
            ) : null
        }
        </div>
    )
}
