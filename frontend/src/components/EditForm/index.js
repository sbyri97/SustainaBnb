import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
import * as spotActions from "../../store/spot";
import StepFooter from "./StepFooter";


export default function LaodingData() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spot.spot[spotId]);
  useEffect(() => {
    if (sessionUser) {
      dispatch(spotActions.userListings(sessionUser.id));
    }
  }, [sessionUser, dispatch]);
  if (!spot) return null;
  return <EditHostForm sessionUser={sessionUser} spot={spot} />;
}

export function EditHostForm({ sessionUser, spot }) {
  const dispatch = useDispatch();
  console.log('this is session user',sessionUser.id)
  console.log('this is sspot', spot);

  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState(spot?.propertyType);
  const [privacyType, setPrivacyType] = useState(spot?.privacyType);
  const [address, setAddress] = useState(spot?.address);
  const [city, setCity] = useState(spot?.city);
  const [state, setState] = useState(spot?.state);
  const [country, setCountry] = useState(spot?.country);
  const [guestCount, setGuestCount] = useState(spot?.guestCount);
  const [bedCount, setBedCount] = useState(spot?.bedCount);
  const [bedroomCount, setBedroomCount] = useState(spot?.bedroomCount);
  const [bathCount, setBathCount] = useState(spot?.bathCount);
  const [name, setName] = useState(spot?.name);
  const [price, setPrice] = useState(spot?.price);
  const [description, setDescription] = useState(spot?.description);
  const userId = sessionUser.id
  const spotId = spot.id


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
    if (step === 8) {
      const spot = {
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
      };
      dispatch(spotActions.updateSpot(spot, userId, spotId));
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
    () => false,
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
          />
        );
      case 4:
        return (
          <FloorPlan nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 5:
        return <Name name={name} setName={setName} />;
      case 6:
        return (
          <Price nextStep={nextStep} prevStep={prevStep} states={states} />
        );
      case 7:
        return (
          <Description
            description={description}
            setDescription={setDescription}
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
          {step !== 10 && (
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
