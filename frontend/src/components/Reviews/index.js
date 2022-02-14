import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import reviewStar from "../../images/reviewStar.png"
import EachReview from "./EachReview"
import * as reviewActions from "../../store/review"
import './Review.css'

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


    return (
        <div className="reviewOuterBox">
            <div className="reviewInnerBox">
                <div className="reviewHeader">
                    <div className="revImgDiv">
                        <img className="reviewStarImg"
                        src={reviewStar} />
                    </div>
                    <div className="revHeadNameDiv">
                        <h1 className="reviewHead">{reviewsArr.length} reviews</h1>
                    </div>
                </div>
                <div className="reviewBodyBox">
                    {reviewsArr.map((indivReview) =>
                        // console.log('this be in', indivReview)
                    <EachReview indivReview={indivReview} key={indivReview.id} sessionUser={sessionUser}/>
                    )}
                </div>
            </div>
            {sessionUser.id !== spotUserId ? (
                <div className="postReviewOuterMostBox">
                    <div className="revBtnDiv">
                        <button className="postReviewOpenBtn" onClick={onClick}>Post A Review</button>
                    </div>
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
    const [errors, setErrors] = useState([]);

    const submitRev = (e) => {
        e.preventDefault()
        if(review === "") {
            setErrors(['field is required'])
        } else {
            setErrors([])
            dispatch(reviewActions.newSubmitReview(userId, spotId, review))
            setReview("")
            setForceUpdate(!forceUpdate)
        }
    }

    useEffect(() => {
        dispatch(reviewActions.receiveReviews(spotId))
    }, [dispatch, forceUpdate])


    return (
        <div className="postReviewOuterBox">
            <div className="postReviewInnerBox">
                <textarea
                className="formReviewBox"
                type="textarea"
                value={review}
                required='required'
                onChange={(e) => {
                setReview(e.target.value)}}></textarea>
                <button className="submitReviewBtn" onClick={submitRev}>Submit Review</button>
            </div>
            <div className="errorDiv">
                {errors.map((error, errorId) => (
                <li key={errorId}>{error}</li>
                ))}
            </div>
        </div>
    )
}

export default Reviews
