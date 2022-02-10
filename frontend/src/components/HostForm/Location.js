import React, { useState } from "react";

export default function Location({ city, setCity, address, setAddress }) {
  return (
    <div>
      <h2>Enter the address of your place.</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />{" "}
      Address
      <br />
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />{" "}
      City
      <br />
    </div>
  );
}
