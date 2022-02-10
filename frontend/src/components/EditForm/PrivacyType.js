import React from "react";

export default function PrivacyType({ privacyType, setPrivacyType }) {
  return (
    <div>
      <h2>Select The Type of Space</h2>
      <input
        type="radio"
        name="privacyType"
        onClick={(e) => setPrivacyType("Entire Place")}
        defaultChecked={privacyType === "Entire Place"}
      />{" "}
      Entire Place
      <br />
      <input
        type="radio"
        name="privacyType"
        onClick={(e) => setPrivacyType("Private Room")}
        defaultChecked={privacyType === "Private Room"}
      />{" "}
      Private Room
      <br />
    </div>
  );
}
