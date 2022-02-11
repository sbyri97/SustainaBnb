import React from "react";

export default function PropertyType({ propertyType, setPropertyType }) {
  return (
    <div className="radio-components">
      <h2>Select the type of property</h2>
      <input
        className="radioApt"
        id="radioApt"
        type="radio"
        value={"Apartment"}
        name="propertyType"
        required
        onClick={(e) => setPropertyType("Apartment")}
        defaultChecked={propertyType === "Apartment"}
      />{" "}
      <label htmlFor='radioApt'>
        <div className="labelName">
          Apartment
        </div>
      </label>
      <br />
      <input
        className="radioHouse"
        id="radioHouse"
        type="radio"
        name="propertyType"
        onClick={(e) => setPropertyType("House")}
        defaultChecked={propertyType === "House"}
      />{" "}
      <label htmlFor='radioHouse'>
        <div className="labelName">
            House
          </div>
      </label>
      <br />
    </div>
  );
}
