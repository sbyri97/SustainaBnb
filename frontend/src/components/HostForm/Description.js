import React, { useState } from "react";

export default function Description({ nextStep, prevStep, states }) {
  const [descriptionErrFeedback, setDescriptionErrFeedback] = useState("");

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { description, setDescription } = states;

  return (
    <div>
      <h2>Create your description</h2>
      <input
        type="text"
        placeholder="Come expereince the peaceful oasis..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      {/* <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(description) {
                    next(e)
                } else {
                    setDescriptionErrFeedback("Please enter a description")
                }
            }}>
                Next
            </button> */}
      {descriptionErrFeedback && (
        <div className="errFeedback">{descriptionErrFeedback}</div>
      )}
    </div>
  );
}
