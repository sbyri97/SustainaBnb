import React from "react";

export default function PropertyType({ propertyType, setPropertyType }) {
  return (
    <div>
      <h2>Select The Type Of Property</h2>
      <input
        type="radio"
        name="propertyType"
        required
        onClick={(e) => setPropertyType("Apartment")}
        defaultChecked={propertyType === "Apartment"}
      />{" "}
      Apartment
      <br />
      <input
        type="radio"
        name="propertyType"
        onClick={(e) => setPropertyType("House")}
        defaultChecked={propertyType === "House"}
      />{" "}
      House
      <br />
    </div>
  );
}
