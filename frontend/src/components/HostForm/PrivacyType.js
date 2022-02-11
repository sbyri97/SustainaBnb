import React from "react";

export default function PrivacyType({ privacyType, setPrivacyType }) {
  return (
    <div className="radio-components">
      <h2>Select the type of space </h2>
      <input
        className="radioEntire"
        id="radioEntire"
        type="radio"
        value={"Entire Place"}
        name="privacyType"
        required
        onClick={(e) => setPrivacyType("Entire Place")}
        defaultChecked={privacyType === "Entire Place"}
      />{" "}
      <label htmlFor='radioEntire'>
        <div className="labelName">
          Entire Place
        </div>
      </label>
      <br />
      <input
        className="radioPrivate"
        id="radioPrivate"
        type="radio"
        name="privacyType"
        onClick={(e) => setPrivacyType("Private Room")}
        defaultChecked={privacyType === "Private Room"}
      />{" "}
      <label htmlFor='radioPrivate'>
        <div className="labelName">
            Private Room
          </div>
      </label>
      <br />
    </div>
  );
}
