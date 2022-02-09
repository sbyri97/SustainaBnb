import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spot';
import UserListings from './userListingsCards'


//here I need to get spots
export default function UserSpots() {

    const spot = useSelector((state) => state.spot.spot)
    const userSpotsArray = Object.values(spot)
    console.log(userSpotsArray)
    const activeUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if(activeUser) {
            dispatch(spotActions.userListings())
        }

    }, [activeUser, dispatch])

    if(!userSpotsArray) return null
    console.log(userSpotsArray.length);
    return (
        <div className='spots-cards'>
            <h1 className='pageTitle'>Your Listings</h1>
            {(userSpotsArray && userSpotsArray.length > 0) ? (
            <div>
                <div>
                    <ul className='user-listing-card' >
                        {userSpotsArray.map((spot) => (
                            <UserListings spot={spot} key={spot.id}/>
                        ))}
                    </ul>
                </div>
            </div> ): (<h2>You do not have any listings</h2>)
            }
        </div>
    )
}
