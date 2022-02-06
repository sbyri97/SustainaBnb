import React, { useState } from 'react';
import PrivacyType from './PrivacyType';
import PropertyType from './PropertyType';
import Location from './Location';

export default function MainHostForm() {
    const [step, setStep] = useState(1)
    const [isApartment, setIsApartment] = useState(false);
    const [isHouse, setIsHouse] = useState(false);
    const [isEntirePlace, setIsEntirePlace] = useState(false);
    const [isPrivateRoom, setIsPrivateRoom] = useState(false);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [guestCount, setGuestCount] = useState("");
    const [bedCount, setBedCount] = useState("");
    const [bedroomCount, setBedroomCount] = useState("");
    const [bathCount, setBathCount] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
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
                <h1>Floor Plan</h1>
            )
        case 6:
            return (
                <h1>Name</h1>
            )
        case 7:
            return (
                <h1>Price</h1>
            )
        case 8:
            return (
                <h1>Description</h1>
            )
        case 9:
            return (
                <h1>Confirmation</h1>
            )
        case 10:
            return (
                <h1>Success</h1>
            )
    }
}
