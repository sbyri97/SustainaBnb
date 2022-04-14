import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker"
import { newBooking } from "../../store/booking";


export const Bookings = ({spotId, spotUserId, spotPrice}) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showBooking, setShowBooking] = useState(false)

    const onClick = (e) => {
        e.preventDefault()
        setShowBooking(!showBooking)
    }

    return (
        <div className="booking-main-div">
            {sessionUser.id !== spotUserId ? (
            <div className="postReviewOuterMostBox">
                <div className="revBtnDiv">
                    <button className="postReviewOpenBtn" onClick={onClick}>{showBooking ? 'Close' : 'Check Availability'}</button>
                </div>
                {showBooking ?
                <BookingBox
                sessionUser={sessionUser}
                spotId={spotId}
                showBooking={showBooking}
                setShowBooking={setShowBooking}
                spotPrice={spotPrice}
                />
                : null}
            </div>
            ) : null
        }
        </div>
    )
}

function BookingBox({sessionUser, spotId, showBooking, setShowBooking, spotPrice}) {
    const dispatch = useDispatch()
    const userId = sessionUser.id
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [errors, setErrors] = useState([]);
    const newDate = new Date()
    newDate.setDate(newDate.getDate() - 1)

    const submitBooking = async (e) => {
        e.preventDefault()
        if (startDate > endDate) {
            setErrors("* Start Date Cannot Be After End Date")
        } else if (startDate < (newDate.setHours(0, 0, 0))) {
            setErrors("* Start Date Must Be In The Future")
        } else if (startDate.getDate() === endDate.getDate()) {
            setErrors ("Check-in and Checkout cannot be on the same day")
        } else {
            const data = await dispatch(newBooking(userId, spotId, startDate, endDate))
            if(data.error) {
                setErrors(data.error)
            } else {
                setShowBooking(!showBooking)
                alert("Booking Has Been Confirmed!")
            }
        }
    }

    // useEffect(() => {
    //     const numOfNights = () => {
    //         const val = endDate - startDate
    //         return val
    //     }
    // }, [endDate])

        const numOfNights = () => {
            const val = endDate.getDate() - startDate.getDate()
            return val
        }

        const totalPrice = () => {
            const total = numOfNights() * spotPrice
            return total
        }

        const dateCheck = () => {
            if((startDate && endDate) && (startDate.getDate() !== endDate.getDate()) && (startDate.getDate() < endDate.getDate())) return true
            return false
        }

    return (
        <div className="booking-main-container">
            <form className="booking=form" onSubmit={submitBooking}>
                <div className='booking-errors'>
                    <div>{errors}</div>
                        {/* {errors?.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))} */}
                </div>
                <div className="booking-start">
                    <div className="outside-booking">
                        <label className="startDate">CHECK-IN</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            required
                        />
                    </div>
                    <div className="outside-booking">
                        <label className="startDate">CHECKOUT</label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            minDate={startDate || (new Date())}
                            required
                        />
                    </div>
                </div>
                <div className="book-spot-btn-box">
                    <button className="book-spot-btn" type="submit">
                        Reserve
                    </button>
                </div>
                {dateCheck() ?
                    <div className="total-price-box">
                        <div className="night-times-price">
                            &nbsp;
                            <div className="night-price">
                                ${spotPrice} x {(startDate && endDate) ?  numOfNights() : null} nights
                            </div>
                        </div>
                        <div className="total-price-times">
                            <div className="total-label">
                                TOTAL
                            </div>
                            <div className="total-price">
                                $ {totalPrice()}
                            </div>
                        </div>
                    </div>
                : null
                }
            </form>
        </div>
    )

}
