import React, { useState } from 'react'
// import validator from 'validator'

export default function PropertyType({nextStep, prevStep, states}) {

    const [disableButton, setDisableButton] = useState(true)
    const [errFeedback, setErrFeedback] = useState("")

    const next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    // const formValidator => {

    // }

    const {setIsApartment, isApartment, isHouse, setIsHouse} = states

    return (
        <div>
            <h2>Select The Type Of Property</h2>
            <input
                type="radio"
                value={isApartment}
                name='propertyType'
                required
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
            <button onClick={(e) => {
                if(isApartment || isHouse) {
                    next(e)
                    setDisableButton(false)
                } else {
                    setErrFeedback("Please select a property type")
                }
            }} isDisabled={disableButton}>
                Next
            </button>

            {errFeedback && <div className='errFeedback'>{errFeedback}</div>}
        </div>
    )
}
