import React, {useState} from 'react'

export default function Description({nextStep, prevStep, states}) {

    const [disableButton, setDisableButton] = useState(true)
    const [titleErrFeedback, setTitleErrFeedback] = useState("")

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
            <h2>Create your title</h2>
            <input
                type="textarea"
                placeholder='A beautiful eco-friendly luxury home'
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <br />
            <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(name) {
                    next(e)
                } else {
                    setTitleErrFeedback("Please enter a title")
                }
            }}>
                Next
            </button>
            {titleErrFeedback && <div className='errFeedback'>{titleErrFeedback}</div>}
        </div>
    )
}
