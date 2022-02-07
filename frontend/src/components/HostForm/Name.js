import React from 'react'

export default function Location({nextStep, prevStep, states}) {

    const next = (e) => {
        e.preventDefault();
        nextStep();
    };

    const prev = (e) => {
        e.preventDefault();
        prevStep();
    }

    const {
        name, setName
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
                } else {
                    alert('All address forms are required.')
                }
            }}>
                Next
            </button>
        </div>
    )
}
