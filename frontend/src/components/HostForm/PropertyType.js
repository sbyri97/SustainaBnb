import React, { useState } from 'react'
// import validator from 'validator'

export default function PropertyType({nextStep, prevStep, states}) {

    const [isChecked, setIsChecked] = useState(false)

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
                } else {
                    alert('Please Select the Type of Place.')
                }
            }}>
                Next
            </button>
        </div>
    )
}
