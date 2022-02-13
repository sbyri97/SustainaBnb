import React from "react";

export default function Image({ imageUrl, setImageUrl }) {
  return (
    <div>
      <h2>&nbsp; Image Url</h2>
      <div className="formTextContainer">
        <textarea
        className="formTextBox"
        type="textarea"
        placeholder="www.imageurlgoeshere.com/niceimage"
        value={imageUrl}
        onChange={(e) => {
            setImageUrl(e.target.value)}} />
      </div>
      <br />
    </div>
  );
}
