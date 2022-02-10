import React from "react";

export default function Description({ name, setName }) {
  return (
    <div>
      <h2>Create your title</h2>
      <input
        type="textarea"
        placeholder="A beautiful eco-friendly luxury home"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
    </div>
  );
}
