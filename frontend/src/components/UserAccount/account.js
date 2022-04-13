import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserBookings, userBookings } from '../../store/booking';
import UserSpots from '../UserListings';


export default function MyAccount() {
    const activeUser = useSelector((state) => state.session.user);
    const bookings = useSelector((state) => state.booking.userBookings);
    const userBookingsArray = Object.values(bookings);
    const dispatch = useDispatch();
    const history = useHistory()

    const [isloading, setIsLoading] = useState(true);

    const formatDateStr = (date) => {
        const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
        const convert = new Date(date)
        return convert.toLocaleDateString('en-US', dateOptions)
    }

    const [deleteBooking, setDeleteBooking] = useState(false)

    useEffect(() => {
        if (activeUser) {
          dispatch(userBookings(activeUser.id));
          setTimeout(() => {
            setIsLoading(false);
            setDeleteBooking(false)
          }, 200)
        }
      }, [activeUser, deleteBooking, dispatch]);


if(activeUser) {
    return (
        <div>
            <UserSpots />
            <div className="spots-cards">
                <h3 className="pageTitle">Your Reservations</h3>
                {isloading ? (
                    <p className='loading'>Loading</p>
                ) : (
                    <div>
                    {userBookingsArray && userBookingsArray.length > 0 ? (
                        <div className='mainUserSpots'>
                        <div className='mainTableDiv'>
                        <table className="mainTable">
                            <thead className='tableHead'  key={'sbthd1'}>
                            <tr className='tableHeadRow' key={'sbtr1'}>
                                <th className='thListing' key={'sbtr2'}>
                                PROPERTY NAME
                                </th>
                                <th className='thStatus' key={'sbtr3'}>
                                LOCATION
                                </th>
                                <th className='thBedrooms' key={'sbtr4'}>
                                CHECK IN
                                </th>
                                <th className='thBeds' key={'sbtr5'}>
                                CHECK OUT
                                </th>
                                <th className='thBaths' key={'sbtr6'}>
                                VIEW PROPERTY
                                </th>
                                <th className='thDelete' key={'sbtr10'}>
                                CANCEL RESERVATION
                                </th>
                            </tr>
                            </thead>
                            <tbody className='tableBody'>
                            {userBookingsArray.map((booking) =>
                            <tr className='tableBodyRow' key={booking.id}>
                                <th className="spotName">
                                    {/* {booking.name} */}
                                    {booking.Spot.name}
                                </th>
                                <th className="spotLocation">
                                    {booking.Spot.city}, {booking.Spot.country}
                                </th>
                                <th className="spotBed">
                                    {formatDateStr(booking.startDate)}
                                </th>
                                <th className="spotBath">
                                    {formatDateStr(booking.endDate)}
                                </th>
                                <th className="editButtons">
                                    <button className="actualEdit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let path = `/spots/${booking.Spot.id}`
                                        history.push(path)
                                    }}>
                                    View
                                    </button>
                                </th>
                                <th className="deleteButtons">
                                    <button className="actualEdit"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteUserBookings(booking.id))
                                    setDeleteBooking(true)
                                    }}>
                                    Cancel
                                    </button>
                                </th>
                            </tr>)}
                            </tbody>
                        </table>
                        </div>
                        </div>
                    ) : (
                        <h2>You do not have any listings</h2>
                    )}
                    </div>
                )}
            </div>
        </div>
    );
    } else {
    return <h1 className="pleaseLogin"> Please Login or Signup</h1>;
    }
}
