import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import reviewStar from "../../images/reviewStar.png"
import EachReview from "./EachReview"
import * as reviewActions from "../../store/review"

function Reviews({review, setReview, spotId, spotUserId, reviewsArr}) {
    const sessionUser = useSelector((state) => state.session.user);
    const [showReviewBox, setShowReviewBox] = useState(false)
    const onClick = (e) => {
        e.preventDefault()
        setShowReviewBox(!showReviewBox)
    }

    const date = new Date(reviewsArr.createdAt)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()

    // useEffect(() => {
    //     setShowReviewBox(true)
    // }, [showReviewBox])
    return (
        <div className="reviewOuterBox">
            <div className="reviewInnerBox">
                <div className="reviewHeader">
                    <img className="reviewStarImg"
                    src={reviewStar}></img>
                    <h1 className="reviewhead">{reviewsArr.length} Reviews</h1>
                </div>
                <div className="reviewBodyBox">
                    {reviewsArr.map((indivReview) =>
                    <EachReview indivReview={indivReview} key={indivReview.id}/>
                    )}
                </div>
            </div>
            {sessionUser.id !== spotUserId ? (
                <div className="postReviewOuterMostBox">
                    <button className="postReviewOpenBtn" onClick={onClick}>Post A Review</button>
                    {showReviewBox ?
                    <ReviewBox
                    review={review}
                    setReview={setReview}
                    sessionUser={sessionUser}
                    spotId={spotId}
                    />
                    : null}
                </div>
            ) : null}
        </div>
    )
}

function ReviewBox({review, setReview, sessionUser, spotId}) {
    const dispatch = useDispatch()
    const userId = sessionUser.id
    const [forceUpdate, setForceUpdate] = useState(false)
    const submitRev = (e) => {
        e.preventDefault()
        dispatch(reviewActions.newSubmitReview(userId, spotId, review))
        setReview("")
        setForceUpdate(!forceUpdate)
    }

    useEffect(() => {
        dispatch(reviewActions.receiveReviews(spotId))
    }, [forceUpdate])
    return (
        <div className="postReviewOuterBox">
            <div className="postReviewInnerBox">
                <textarea
                className="formReviewBox"
                type="textarea"
                value={review}
                onChange={(e) => {
                setReview(e.target.value)}} />
                <button className="submitReviewBtn" onClick={submitRev}>Submit Review</button>
            </div>
        </div>
    )
}

export default Reviews
