import React from "react";
import { useSelector } from "react-redux";

export default function Confirm({ states }) {
  const user = useSelector((state) => state.session.user.username);


  // const next = (e) => {
  //   e.preventDefault();
  //   nextStep();
  //   return dispatch(
  //     spotActions.newSpot({
  //       isApartment,
  //       isHouse,
  //       isEntirePlace,
  //       isPrivateRoom,
  //       address,
  //       city,
  //       guestCount,
  //       bedCount,
  //       bedroomCount,
  //       bathCount,
  //       name,
  //       price,
  //       description,
  //       userId,
  //     })
  //   );
  // };

  // const prev = (e) => {
  //   e.preventDefault();
  //   prevStep();
  // };

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
