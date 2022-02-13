import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spot';
import * as reviewActions from '../../store/review'
import { Link, NavLink, useParams} from 'react-router-dom'
import './IndividualSpot.css'
import '../Reviews/Review.css'
import Reviews from '../Reviews';


function IndividualSpot() {
    const {spotId} = useParams()
    const spot = useSelector((state) => state.spot.spot[spotId]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [review, setReview] = useState()
    const allReviews = useSelector((state) => state.review.review)
    const reviewsArr = Object.values(allReviews)

  useEffect(() => {
      dispatch(spotActions.indivSpot(spotId));
      setTimeout(() => {
          setLoading(false);
        }, 200)
    }, [dispatch]);

    useEffect(() => {
        dispatch(reviewActions.receiveReviews(spotId))
        setTimeout(() => {
            setLoading(false);
          }, 200)
      }, [dispatch]);
  const propType = () => {
    if (spot?.propertyType === 'Apartment') {
      return "apartment";
    } else return "house";
  };

  const placeType = () => {
    if (spot?.privacyType === 'Entire Place') {
      return "Entire";
    } else return "Private";
  };

    return (
        <div>
            {loading ? (
                <p className='loading'>Loading</p>
            ) : (
                <div>
                {spot?.id ? (
                    <div className="mainIndivSpot">
                        <div className="spotTitleLocBox">
                            <div className="spotTitle">{spot?.name}</div>
                            <div className="spotLoc">{spot?.city}, {spot?.state}, {spot?.country}</div>
                        </div>
                        <div className="spotImgBox">
                            <div className='ImgInnerDiv'>
                                <img className='spotImg' src={spot?.imageUrl} />
                            </div>
                        </div>
                        <div className="spotInfoBox">
                            <div className="spotDetailsBox">
                                <div className="spotDetails-property">{placeType()} {propType()} hosted by {spot.User.username}</div>
                                <div className="spotDetails-description">{spot?.description}</div>
                                <div className="spotDetails-placeinfo">
                                    <div className='spotDetails-offer'>This details of this place</div>
                                    <div className='spotDetails-guest'>
                                        <i className="fas fa-user" />
                                        {spot?.guestCount < 2 ? ` ${" "}1 Guest` : `  ${spot?.guestCount} Guests`}
                                        </div>
                                    <div className='spotDetails-guest'>
                                        <i className="fas fa-bed" />
                                        {spot?.bedCount < 2 ? ' 1 Bed' : ` ${spot?.bedCount} Beds`}</div>
                                    <div className='spotDetails-guest'>
                                        <i className="fas fa-person-booth" />
                                        {spot?.bedroomCount < 2 ? ' 1 Bedroom' : ` ${spot?.bedroomCount} Bedrooms`}</div>
                                    <div className='spotDetails-guest'>
                                        <i className="fas fa-bath" />
                                        {spot?.bathCount < 1 ? ' 0.5 Bath' : ` ${spot?.bathCount} Baths`}</div>
                                </div>
                            </div>
                            <div className="spotPriceBox">
                                <div className='spotPrice'>
                                    ${spot?.price} / night
                                </div>
                            </div>
                        </div>
                        <div className="spotReviewBox">
                            <Reviews review={review} setReview={setReview} spotId={spotId} spotUserId={spot.userId} reviewsArr={reviewsArr}/>
                        </div>
                    </div>
                ) : (
                    <h2 className='noSpot'>Lisitng Doesn't exist</h2>
                )}
                </div>
            )}
        </div>
    )
}

export default IndividualSpot
