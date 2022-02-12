import React from "react";

export default function Image({ name, setName }) {
  return (
    <div>
      <h2>&nbsp; Create your title</h2>
      <div className="formTextContainer">
        <textarea
        className="formTextBox"
        type="textarea"
        placeholder="A beautiful eco-friendly luxury home"
        value={name}
        onChange={(e) => {
            setName(e.target.value)}} />
      </div>
      <br />
    </div>
  );
}
