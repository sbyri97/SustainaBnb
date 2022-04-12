import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker"
import { newBooking } from "../../store/booking";


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
                <div className="revBtnDiv">
                    <button className="postReviewOpenBtn" onClick={onClick}>Reserve</button>
                </div>
                {showBooking ?
                <BookingBox
                sessionUser={sessionUser}
                spotId={spotId}
                />
                : null}
            </div>
            ) : null
        }
        </div>
    )
}

function BookingBox({sessionUser, spotId}) {
    const dispatch = useDispatch()
    const userId = sessionUser.id
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [errors, setErrors] = useState([]);
    const newDate = new Date()
    newDate.setDate(newDate.getDate() - 1)

    const submitBooking = async (e) => {
        e.preventDefault()
        console.log(newDate);
        if (startDate > endDate) {
            setErrors("Start Date Cannot Be After End Date")
        } else if (startDate < (newDate.setHours(0, 0, 0))) {
            setErrors("Start Date Must Be In The Future")
        } else {
            const data = await dispatch(newBooking(userId, spotId, startDate, endDate))
            if(data.error) {
                setErrors(data.error)
            }
        }
    }

    return (
        <div className="booking-main-container">
            <form className="booking=form" onSubmit={submitBooking}>
                <div className='errors'>
                    <div>{errors}</div>
                        {/* {errors?.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))} */}
                </div>
                <div className="booking-start">
                    <label htmlFor="startDate">Check In Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        required
                    />
                </div>
                <div className="booking-start">
                    <label htmlFor="startDate">Check Out Date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        minDate={startDate || (new Date())}
                        required
                    />
                </div>
                <button className="book-spot-btn" type="submit">
                    Reserve
                </button>
            </form>
        </div>
    )

}
