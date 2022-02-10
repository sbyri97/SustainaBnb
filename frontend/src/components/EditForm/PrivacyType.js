import React, { useState } from 'react'

export default function PrivacyType({nextStep, prevStep, states}) {

    const [disableButton, setDisableButton] = useState(true)
    const [privacyErrFeedback, setPrivacyErrFeedback] = useState("")

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
                defaultChecked={isEntirePlace}
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
                defaultChecked={isPrivateRoom}
            /> Private Room
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(isEntirePlace || isPrivateRoom) {
                    next(e)
                } else {
                    setPrivacyErrFeedback("Please select a type of space")
                }
            }}>
                Next
            </button>

            {privacyErrFeedback && <div className='errFeedback'>{privacyErrFeedback}</div>}
        </div>
    )
}
