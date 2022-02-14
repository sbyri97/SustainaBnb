import React from "react";

export default function Price({ nextStep, prevStep, price, setPrice }) {

  return (
    <div className="price-container">
      <div className="price-elemetns">
        <button
          className="count-btns"
          onClick={() => {
            setPrice((price) => price + 5);
          }}
        >
          +
        </button>
        <input
          className="priceValue"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
          }}
        />
        <button
          className="count-btns"
          onClick={() => {
            setPrice((price) => price - 5);
          }}
        >
          -
        </button>
      </div>
      <h2 className="perNight">per night</h2>
      <br />
    </div>
  );
}
