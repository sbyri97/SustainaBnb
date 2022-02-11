import React, { useState } from "react";

export default function Description({ description, setDescription }) {
  return (
    <div>
      <h2>&nbsp; Create your description</h2>
      <div className="formTextContainer">
        <textarea
          className="formTextBox"
          type="textarea"
          placeholder="Come expereince the peaceful oasis..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <br />
    </div>
  );
}
