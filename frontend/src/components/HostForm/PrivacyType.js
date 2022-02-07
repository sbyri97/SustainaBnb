import React, { useState } from 'react'

export default function PrivacyType({nextStep, prevStep, states}) {

    const next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    const {setIsEntirePlace, isEntirePlace, isPrivateRoom, setIsPrivateRoom} = states

    return (
        <div>
            <h2>Select The Type of Space</h2>
            <input
                type="radio"
                value={isEntirePlace}
                name='privacyType'
                onClick={(e) => {
                    setIsEntirePlace(!isEntirePlace);
                    if(isPrivateRoom) {
                        setIsPrivateRoom(false)
                    };
                }}
            /> Entire Place
            <br />
            <input
                type="radio"
                value={isPrivateRoom}
                name='privacyType'
                onClick={(e) => {
                    setIsPrivateRoom(!isPrivateRoom);
                    if(isEntirePlace) {
                        setIsEntirePlace(false)
                    }
                }}
            /> Private Room
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(isEntirePlace || isPrivateRoom) {
                    next(e)
                } else {
                    alert('Please Select the Type of Space.')
                }
            }}>
                Next
            </button>
        </div>
    )
}
