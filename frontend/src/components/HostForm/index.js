import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PrivacyType from './PrivacyType';
import PropertyType from './PropertyType';
import Location from './Location';
import FloorPlan from './FloorPlan';
import Name from './Name'
import Description from './Description';
import Price from './Price';
import Confirm from './Confirm';
import Success from './Success';

export default function MainHostForm() {
    const sessionUser = useSelector((state) => state.session.user);
    const [step, setStep] = useState(1)
    const [isApartment, setIsApartment] = useState(false);
    const [isHouse, setIsHouse] = useState(false);
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

    const nextStep = () => {
        setStep((step) => step + 1)
    };

    const prevStep = () => {
        setStep((step) => step - 1)
    };

    const states = {
        isApartment, setIsApartment,
        isHouse, setIsHouse,
        isEntirePlace, setIsEntirePlace,
        isPrivateRoom, setIsPrivateRoom,
        address, setAddress,
        city, setCity,
        state, setState,
        country, setCountry,
        guestCount, setGuestCount,
        bedCount, setBedCount,
        bedroomCount, setBedroomCount,
        bathCount, setBathCount,
        name, setName,
        price, setPrice,
        description, setDescription
    }

    // const handleInputChange = (input) => e => {
    //     this.setState({[input]: e.target.value})
    // }
    if(sessionUser) {
        switch (step) {
            case 1:
                return (
                    <div>
                        <h1>Click to follow 7 easy steps to hosting</h1>
                        <button onClick={nextStep}>
                            Next
                        </button>
                    </div>

                )
            case 2:
                return (
                    <PropertyType
                        nextStep={nextStep}
                        prevStep={prevStep}
                        states={states}
                    />
                )
            case 3:
                return (
                    <PrivacyType
                        nextStep={nextStep}
                        prevStep={prevStep}
                        states={states}
                    />
                )
            case 4:
                return (
                    <Location
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                />
                )
            case 5:
                return (
                    <FloorPlan
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                    />
                )
            case 6:
                return (
                    <Name
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                    />
                )
            case 7:
                return (
                    <Price
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                    />
                )
            case 8:
                return (
                    <Description
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                    />
                )
            case 9:
                return (
                    <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    states={states}
                    />
                )
            case 10:
                return (
                    <Success />
                )
        }
    }

    else {
        return (
            <h1> Please Login or Signup</h1>
        )
    }
}
