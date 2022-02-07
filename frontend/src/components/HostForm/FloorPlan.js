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
            <div className='count-div'>
                <h3 className='count-titles'>Guests</h3>
                <button onClick={() => {
                    if(guestCount < 50) {
                        setGuestCount((guestCount) => guestCount + 1)
                    }
                }}>+</button>
                <h3 className='count-values'>{guestCount}</h3>
                <button onClick={() => {
                    if(guestCount >= 2) {
                        setGuestCount((guestCount) => guestCount - 1)
                    }
                }}>-</button>
            </div>
            <div className='count-div'>
                <h3 className='count-titles'>Bedrooms</h3>
                <button onClick={() => {
                    if(bedroomCount < 25) {
                        setBedroomCount((bedroomCount) => bedroomCount + 1)
                    }
                }}>+</button>
                <h3 className='count-values'>{bedroomCount}</h3>
                <button onClick={() => {
                    if(bedroomCount >= 2) {
                        setBedroomCount((bedroomCount) => bedroomCount - 1)
                    }
                }}>-</button>
            </div>
            <div className='count-div'>
                <h3 className='count-titles'>Beds</h3>
                <button onClick={() => {
                    if(bedCount < 30) {
                        setBedCount((bedCount) => bedCount + 1)
                    }
                }}>+</button>
                <h3 className='count-values'>{bedCount}</h3>
                <button onClick={() => {
                    if(bedCount >= 2) {
                        setBedCount((bedCount) => bedCount - 1)
                    }
                }}>-</button>
            </div>
            <div className='count-div'>
                <h3 className='count-titles'>Bathrooms</h3>
                <button onClick={() => {
                    if(bathCount < 30) {
                        setBathCount((bathCount) => bathCount + 0.5)
                    }
                }}>+</button>
                <h3 className='count-values'>{bathCount}</h3>
                <button onClick={() => {
                    if(bathCount >= 1) {
                        setBathCount((bathCount) => bathCount - 0.5)
                    }
                }}>-</button>
            </div>
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
