import React from 'react'
import { useDispatch } from 'react-redux';
import * as spotActions from "../../store/spot";

export default function Confirm({nextStep, prevStep, states}) {

    const dispatch = useDispatch();

    const next = (e) => {
        e.preventDefault();
        nextStep();
        return(dispatch(spotActions.newSpot({
            isApartment, isHouse, isEntirePlace, isPrivateRoom,
            address, city, guestCount, bedCount,
            bedroomCount, bathCount, name, price, description
        })))
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    const {
        isApartment, isHouse, isEntirePlace, isPrivateRoom,
        address, city, state, country, guestCount, bedCount,
        bedroomCount, bathCount, name, price, description
    } = states

    const propType = () => {
        if(isApartment) {
            return "apartment"
        } else return "house"
    }

    const placeType = () => {
        if(isEntirePlace) {
            return "Entire"
        } else return "Private"
    }

    return (
        <div>
            <h2>Confirm your property</h2>
            <ul>
                <li>
                    Title: {name}
                </li>
                <li>
                    {placeType()} {propType()} hosted by User
                </li>
                <li>
                    Description: {description}
                </li>
                <li>
                    ${price} per night
                </li>
                <li>
                    {guestCount} guests || {bedroomCount} bedrooms || {bedCount} beds || {bathCount} bath
                </li>
                <li>
                    Location {address}, {city}
                </li>
            </ul>
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                next(e)
            }}>
                Submit Property
            </button>
        </div>
    )
}
