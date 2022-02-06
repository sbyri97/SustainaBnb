import React, { useState } from 'react'

export default function FloorPlan({nextStep, prevStep, states}) {

    const next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    const {
        guestCount, setGuestCount,
        bedCount, setBedCount,
        bedroomCount, setBedroomCount,
        bathCount, setBathCount
    } = states

    return (
        <div>
            <h2>How many guests can your sustainable place welcome?</h2>
            <input
                type="radio"
                value={isApartment}
                name='propertyType'
                onClick={(e) => {
                    setIsApartment(!isApartment);
                    if(isHouse) {
                        setIsHouse(false)
                    };
                }}
            /> Apartment
            <br />
            <input
                type="radio"
                value={isHouse}
                name='propertyType'
                onClick={(e) => {
                    setIsHouse(!isHouse);
                    if(isApartment) {
                        setIsApartment(false)
                    }
                }}
            /> House
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={next}>
                Next
            </button>
        </div>
    )
}
