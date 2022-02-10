import React from "react";

export default function PropertyType({ propertyType, setPropertyType }) {
  return (
    <div className="radio-components">
      <h2>Select The Type Of Property</h2>
      <input
        className="radioApt"
        type="radio"
        name="propertyType"
        required
        onClick={(e) => setPropertyType("Apartment")}
        defaultChecked={propertyType === "Apartment"}
      />{" "}
      Apartment
      <br />
      <input
        className="radioHouse"
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
