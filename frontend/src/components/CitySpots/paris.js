import React, {useState, useEffect} from 'react'
import * as spotActions from '../../store/spot'
import { useDispatch, useSelector } from 'react-redux'
import '../AllSpots/AllSpots.css'
import map from '../../images/allMap.jpg'
import reviewStar from "../../images/reviewStar.png"

export function Paris() {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spot.spot)
    const allSpotsArray = Object.values(spots);

    useEffect(() => {
        dispatch(spotActions.getCitySpots('Paris'));
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
    }, [dispatch])

    const propType = (spot) => {
        if (spot?.propertyType === "Apartment") {
          return "apartment";
        } else return "house";
    };

    const placeType = (spot) => {
        if (spot?.privacyType === "Entire Place") {
          return "Entire";
        } else return "Private";
    };

    return (
        <div className='spotsMainDiv'>
            {isLoading ? (
                <p className='loading'>Loading</p>
                ) : (
                    <div className='afterLoading'>
                        <div className='spotsCardOuterMostDiv'>
                            <div className='spotCountAndCards'>
                                <div className='spotsCountDiv'>
                                    <div className='numberOfSpots'> {allSpotsArray.length < 2 ? '1 stay around the world' : `${allSpotsArray.length} stays around the world`}</div>
                                </div>
                                {allSpotsArray.map((spot) => (
                                    <div className='spotCardOuterDiv' key={spot?.id}>
                                        <div className='spotsCardInnerDiv'>
                                            <a className='spotLinkTag' href={`/spots/${spot?.id}`} style={{textDecoration: 'none'}}>
                                                <div className='spotsCardImageDiv'>
                                                    <img className='spotsCardImage' src={spot.imageUrl}/>
                                                </div>
                                                <div className='spotsCardInfoDiv'>
                                                    <div className='spotPropertyInfoBox'>
                                                        <h2 className='spotPropertyInfo'>{placeType(spot)} {propType(spot)} in {spot?.city}, {spot?.state}</h2>
                                                    </div>
                                                    <div className='spotMiniLine'></div>
                                                    <div className='spotFloorPlanBox'>
                                                        <div className='spotFloorPlan'>{spot?.guestCount < 2 ? '1 guest' : ` ${spot?.guestCount} guests`} {"\u00b7"}{" "}{spot?.bedroomCount < 2 ? '1 bedroom' : ` ${spot?.bedroomCount} bedrooms`} {"\u00b7"}{" "}
                                                            {spot?.bedCount < 2 ? '1 bed' : ` ${spot?.bedCount} beds`} {"\u00b7"}{" "}
                                                            {spot?.bathCount < 1 ? '0.5 bath' : ` ${spot?.bathCount} baths`}</div>
                                                    </div>
                                                    <div className='spotMiniLineTwo'></div>
                                                    {/* <div className='allSpotDescriptionBox'>
                                                        <div className='allSpotDescription'>{spot?.description}</div>
                                                    </div> */}
                                                    <div className='spotRevPriceOuterDiv'>
                                                        <div className='spotRevDiv'>
                                                            <img className='spotStar' src={reviewStar} />
                                                            <div className='spotRevcountBox'>
                                                                <div className='spotRevCount'>{spot?.Reviews.length === 1 ? '1 review' : `${spot?.Reviews.length} reviews`}</div>
                                                            </div>
                                                        </div>
                                                        <div className='allSpotPriceBox'>
                                                            <h2 className='allSpotPrice'>${spot?.price} /night</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='spotsMapImgDiv'>
                                <img className='spotsMapImg' src={map}/>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
