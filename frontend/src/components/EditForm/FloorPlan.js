import React, { useState } from "react";

export default function FloorPlan({ nextStep, prevStep, states }) {

  const {
    guestCount,
    setGuestCount,
    bedCount,
    setBedCount,
    bedroomCount,
    setBedroomCount,
    bathCount,
    setBathCount,
  } = states;

  return (
    <div>
      <h2>Lets get the details of your environmentally friendly property</h2>
      <div className="count-container">
        <div className="count-div">
          <h3 className="count-titles">Guests</h3>
          <div className="btn-value">
            <button
              className="count-btns"
              onClick={() => {
                if (guestCount < 50) {
                  setGuestCount((guestCount) => guestCount + 1);
                }
              }}
            >
              +
            </button>
            <h3 className="count-values">{guestCount}</h3>
            <button
              className="count-btns"
              disabled={guestCount < 2 ? true : false}
              onClick={() => {
                if (guestCount >= 2) {
                  setGuestCount((guestCount) => guestCount - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="count-div">
          <h3 className="count-titles">Bedrooms</h3>
          <div className="btn-value">
            <button
              className="count-btns"
              onClick={() => {
                if (bedroomCount < 25) {
                  setBedroomCount((bedroomCount) => bedroomCount + 1);
                }
              }}
            >
              +
            </button>
            <h3 className="count-values">{bedroomCount}</h3>
            <button
              className="count-btns"
              disabled={bedroomCount < 2 ? true : false}
              onClick={() => {
                if (bedroomCount >= 2) {
                  setBedroomCount((bedroomCount) => bedroomCount - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="count-div">
          <h3 className="count-titles">Beds</h3>
          <div className="btn-value">
            <button
              className="count-btns"
              onClick={() => {
                if (bedCount < 30) {
                  setBedCount((bedCount) => bedCount + 1);
                }
              }}
            >
              +
            </button>
            <h3 className="count-values">{bedCount}</h3>
            <button
              className="count-btns"
              disabled={bedCount < 2 ? true : false}
              onClick={() => {
                if (bedCount >= 2) {
                  setBedCount((bedCount) => bedCount - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="count-div">
          <h3 className="count-titles">Bathrooms</h3>
          <div className="btn-value">
            <button
              className="count-btns"
              onClick={() => {
                if (bathCount < 30) {
                  const dec = parseInt(bathCount)
                  setBathCount((dec) => dec + 0.5);
                }
              }}
            >
              +
            </button>
            <h3 className="count-values">{bathCount}</h3>
            <button
              className="count-btns"
              disabled={bathCount < 1 ? true : false}
              onClick={() => {
                if (bathCount >= 1) {
                  setBathCount((bathCount) => bathCount - 0.5);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
