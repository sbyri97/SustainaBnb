import React from "react";

export default function Location({ city, setCity, address, setAddress, state, setState, country, setCountry, }) {
  return (
    <div>
      <h2>Enter the address of your place</h2>
      <div className="locationContainer">
        <input
          className="addressBox"
          type="textarea"
          placeholder="Street Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="addressBox"
          type="textarea"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="addressBox"
          type="textarea"
          placeholder="State"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="addressBox"
          type="textarea"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />{" "}
        <br />
      </div>
    </div>
  );
}
