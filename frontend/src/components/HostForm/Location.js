import React, { useState } from 'react'

export default function Location({nextStep, prevStep, states}) {

    const [disableButton, setDisableButton] = useState(true)
    const [locationErrFeedback, setLocationErrFeedback] = useState("")


    const next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    const {
        address, setAddress,
        city, setCity,
        state, setState,
        country, setCountry
    } = states

    return (
        <div>
            <h2>Enter the address of your place.</h2>
            <input
                type="text"
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}
            /> Address
            <br />
            <input
                type="text"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)
                }}
            /> City
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(address && city) {
                    next(e)
                    setDisableButton(false)
                } else {
                    setLocationErrFeedback("Please complete all the fields")
                }
            }} isDisabled={disableButton}>
                Next
            </button>
            {locationErrFeedback && <div className='errFeedback'>{locationErrFeedback}</div>}
        </div>
    )
}
