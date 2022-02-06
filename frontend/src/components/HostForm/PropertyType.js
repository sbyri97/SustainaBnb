import React, { useState } from 'react'

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

    const {setIsApartment, isApartment, isHouse, setIsHouse} = states

    return (
        <div>
            <h2>Select The Type Of Property</h2>
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
