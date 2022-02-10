import React from "react";

export default function Price({ nextStep, prevStep, states }) {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { price, setPrice } = states;

  return (
    <div>
      <button
        onClick={() => {
          setPrice((price) => price + 5);
        }}
      >
        +
      </button>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setPrice((price) => price - 5);
        }}
      >
        -
      </button>
      <h2>per night</h2>
      <br />
      {/* <button onClick={prev}>
                Back
            </button>
            <button onClick={(e) => {
                if(price) {
                    next(e)
                } else {
                    alert('Must enter Price.')
                }
            }}>
                Next
            </button> */}
    </div>
  );
}
