import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import * as spotActions from "../../store/spot";
import PrivacyType from "./PrivacyType";
import PropertyType from "./PropertyType";
import Location from "./Location";
import Image from "./Image";
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

  const [propertyType, setPropertyType] = useState("");
  const [privacyType, setPrivacyType] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [imageUrl, setImageUrl] = useState("")

  const [guestCount, setGuestCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bathCount, setBathCount] = useState(0.5);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(300);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();


if (sessionUser) {
  const userId = sessionUser.id;

  const questions = [
    "Host Your Sustainable Property in 10 Steps",
    "What type of property is your sustainable property?",
    "What kind of space is your sustainable property?",
    "Where is it located?",
    "Please add an image of your beautiful peoperty",
    "How many guests can your sustainable property welcome?",
    "Lets give your sustainable place a name",
    "What is the price your home deserves?",
    "Lets give your sustainable place a description",
    "Please confirm your property",
  ];

  const nextStep = () => {
    if (step === 9) {
      const spot = {
        propertyType,
        privacyType,
        address,
        city,
        state,
        country,
        imageUrl,
        guestCount,
        bedCount,
        bedroomCount,
        bathCount,
        name,
        price,
        description,
        userId,
      };

      dispatch(spotActions.newSpot(spot));
    }
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const states = {
    propertyType,
    setPropertyType,
    privacyType,
    setPrivacyType,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    imageUrl,
    setImageUrl,
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
    () => false, //0
    () => !propertyType,
    () => !privacyType,
    () => (!address || !state || !city || !country),
    () => !imageUrl,
    () => false,
    () => !name,
    () => !price,
    () => !description,
    () => false,
    () => false,
  ];

  const getStepRightSide = () => {
    switch (step) {
      case 0:
        return <h1 className="maintitle">Click Next to get Started</h1>;
      case 1:
        return (
          <PropertyType
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        );
      case 2:
        return (
          <PrivacyType
          privacyType={privacyType}
          setPrivacyType={setPrivacyType}
          />
        );
      case 3:
        return (
          <Location
            city={city}
            setCity={setCity}
            address={address}
            setAddress={setAddress}
            state={state}
            setState={setState}
            country={country}
            setCountry={setCountry}
          />
        );
      case 4:
        return (
          <Image
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          />
        )
      case 5:
        return (
          <FloorPlan nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 6:
        return <Name name={name} setName={setName} />;
      case 7:
        return (
          <Price nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 8:
        return (
          <Description
            description={description}
            setDescription={setDescription}
          />
        );
      case 9:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 10:
        return <Success />;
      case 11:
        return <Redirect to={`/users/${sessionUser.id}/spots`} />
    }
  };

    return (
      <div className="firstPage-container">
        <div className="firstPage side">
          <h1 className="qtitle">{questions[step]}</h1>
        </div>
        <div className="firstPage content">
          <div className="primary-content">{getStepRightSide()}</div>
          {step !== 11 && (
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
    return <h1 className="pleaseLogin"> Please Login or Signup</h1>;
  }
}
