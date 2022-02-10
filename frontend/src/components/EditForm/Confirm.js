import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as spotActions from "../../store/spot";

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
    if (propertyType) {
      return "apartment";
    } else return "house";
  };

  const placeType = () => {
    if (privacyType) {
      return "Entire";
    } else return "Private";
  };

  return (
    <div>
      <h2>Confirm your property</h2>
      <ul>
        <li>Title: {name}</li>
        <li>
          {placeType()} {propType()} hosted by {user}
        </li>
        <li>Description: {description}</li>
        <li>${price} per night</li>
        <li>
          {guestCount} guests || {bedroomCount} bedrooms || {bedCount} beds ||{" "}
          {bathCount} bath
        </li>
        <li>
          Location {address}, {city}
        </li>
      </ul>
      <br />
    </div>
  );
}
