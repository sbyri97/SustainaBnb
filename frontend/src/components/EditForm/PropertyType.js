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

    const aptChecked = () => {
        setIsApartment(false)
    }

    const houseChecked = () => {
        setIsHouse(false)
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
                defaultChecked={isApartment}
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
                defaultChecked={isHouse}
            /> House
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(isApartment || isHouse) {
                    next(e)
                } else {
                    setErrFeedback("Please select a property type")
                }
            }} >
                Next
            </button>

            {errFeedback && <div className='errFeedback'>{errFeedback}</div>}
        </div>
    )
}
