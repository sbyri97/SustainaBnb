import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as spotActions from "../../store/spot";
import PrivacyType from "./PrivacyType";
import PropertyType from "./PropertyType";
import Location from "./Location";
import FloorPlan from "./FloorPlan";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Confirm from "./Confirm";
import Success from "./Success";
import "./HostForm.css";
import StepFooter from "./StepFooter";

export default function MainHostForm() {
  const sessionUser = useSelector((state) => state.session.user);
  const [step, setStep] = useState(0);
  const [isApartment, setIsApartment] = useState(false);
  const [isHouse, setIsHouse] = useState(false);

  const [propertyType, setPropertyType] = useState();

  const [isEntirePlace, setIsEntirePlace] = useState(false);
  const [isPrivateRoom, setIsPrivateRoom] = useState(false);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [guestCount, setGuestCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathCount, setBathCount] = useState(0.5);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(300);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const userId = useSelector((state) => state.session.user.id);

  const questions = [
    "Host Your Sustainable Property in 9 Steps",
    "What type of property is sustainable property?",
    "What kind of space is your sustainable property?",
    "Where is it located?",
    "How many guests can your sustainable property hold?",
    "Lets give your sustainable place a name",
    "What is the price your home deserves?",
    "Lets give your sustainable place a description",
    "Please confirm your property",
  ];

  const nextStep = () => {
    if (step === 7) {
      const spot = {
        isApartment,
        isHouse,
        isEntirePlace,
        isPrivateRoom,
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
        userId,
      };
      return dispatch(spotActions.newSpot(spot));
    }
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const states = {
    isApartment,
    setIsApartment,
    isHouse,
    setIsHouse,
    isEntirePlace,
    setIsEntirePlace,
    isPrivateRoom,
    setIsPrivateRoom,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    guestCount,
    setGuestCount,
    bedCount,
    setBedCount,
    bedroomCount,
    setBedroomCount,
    bathCount,
    setBathCount,
    name,
    setName,
    price,
    setPrice,
    description,
    setDescription,
  };

  const disabledStateOnStepper = [
    () => false,
    () => !propertyType,
    () => false,
    () => false,
    () => false,
    () => false,
    () => false,
    () => false,
    () => false,
  ];

  const getStepRightSide = () => {
    switch (step) {
      case 0:
        return <h1 className="title">Click Next to get Started</h1>;
      case 1:
        return (
          <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            nextStep={nextStep}
            prevStep={prevStep}
            states={states}
          />
        );
      case 2:
        return (
          <PrivacyType
            nextStep={nextStep}
            prevStep={prevStep}
            states={states}
          />
        );
      case 3:
        return (
          <Location
            nextStep={nextStep}
            prevStep={prevStep}
            city={city}
            setCity={setCity}
            address={address}
            setAddress={setAddress}
          />
        );
      case 4:
        return (
          <FloorPlan nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 5:
        return <Name nextStep={nextStep} prevStep={prevStep} states={states} />;
      case 6:
        return (
          <Price nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 7:
        return (
          <Description
            nextStep={nextStep}
            prevStep={prevStep}
            states={states}
          />
        );
      case 8:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 9:
        return <Success />;
    }
  };

  if (sessionUser) {
    return (
      <div className="firstPage-container">
        <div className="firstPage side">
          <h1 className="title">{questions[step]}</h1>
        </div>
        <div className="firstPage content">
          <div className="primary-content">{getStepRightSide()}</div>
          {step !== 9 && (
            <StepFooter
              disabledStateOnStepper={disabledStateOnStepper[step]}
              nextStep={nextStep}
              prevStep={prevStep}
              step={step}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <h1> Please Login or Signup</h1>;
  }
}
