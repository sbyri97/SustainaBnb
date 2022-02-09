import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PrivacyType from './PrivacyType';
import PropertyType from './PropertyType';
import Location from './Location';
import FloorPlan from './FloorPlan';
import Name from './Name'
import Description from './Description';
import Price from './Price';
import Confirm from './Confirm';
import Success from './Success';
import './HostForm.css'
import * as spotActions from '../../store/spot'

export default function EditHostForm() {
    const { spotId } = useParams()

    const sessionUser = useSelector((state) => state.session.user);
    const spot = useSelector((state) => state.spot.spot[spotId])
    console.log('this is the', spot);

    
    const [step, setStep] = useState(1)
    const [isApartment, setIsApartment] = useState(spot?.isApartment);
    const [isHouse, setIsHouse] = useState(spot?.isHouse);
    const [isEntirePlace, setIsEntirePlace] = useState(spot?.isEntirePlace);
    const [isPrivateRoom, setIsPrivateRoom] = useState(spot?.isPrivateRoom);
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

    const dispatch = useDispatch()

    useEffect(() => {
        if (sessionUser) {
          dispatch(spotActions.userListings(sessionUser.id));
        }
      }, [sessionUser, dispatch]);

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
