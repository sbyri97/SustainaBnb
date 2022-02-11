import React from "react";
import { useSelector } from "react-redux";

export default function Confirm({ states }) {
  const user = useSelector((state) => state.session.user.username);
  const {
    propertyType,
    privacyType,
    address,
    city,
    state,
    country,
    guestCount,
    bedCount,
    bedroomCount,
    bathCount,
    name,
    price,
    description,
  } = states;

  const propType = () => {
    if (propertyType === 'Apartment') {
      return "apartment";
    } else return "house";
  };

  const placeType = () => {
    if (privacyType === 'Entire Place') {
      return "Entire";
    } else return "Private";
  };

  return (
    <div className="outerMostBox">
      <div className="outerBox">
        <div className="innerBox">
          <div className="confirmImg">
            <img className="imgPrev"></img>
          </div>
          <h1 className="confirmTitle">{name}</h1>
          <div className="confirmPropType">
            {placeType()} {propType()} hosted by {user}
          </div>
          <div className="confirmDetail">
            {guestCount} guests || {bedroomCount} bedrooms || {bedCount} beds ||{" "}
            {bathCount} bath
          </div>
          <div className="confirmDescription">{description}</div>
          <div className="confirmPrice">${price} per night</div>
          <div className="confirmLocation">
            <h2 className="locText"> Location</h2>
            <div className="loc">
              {address}, {city}, {state}, {country}
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}
