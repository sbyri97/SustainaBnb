import React, { useState } from "react";

export default function Description({ description, setDescription }) {
  return (
    <div>
      <h2>Create your description</h2>
      <input
        type="text"
        placeholder="Come expereince the peaceful oasis..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
    </div>
  );
}
