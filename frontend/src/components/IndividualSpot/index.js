import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spot';
import { Link, NavLink, useParams} from 'react-router-dom'


function IndividualSpot() {
    const {spotId} = useParams()
    const spot = useSelector((state) => state.spot.spot[spotId]);
    console.log('this is the indiv spot', spot.name)
    const dispatch = useDispatch();
    const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
      dispatch(spotActions.indivSpot(spotId));
      setTimeout(() => {
        setIsLoading(false);
      }, 200)
  }, [dispatch]);

    return (
        <div>
            {isloading ? (
                <p className='loading'>Loading</p>
            ) : (
                <div>
                {spot && spot.length > 0 ? (
                    <div className="mainIndivSpot">
                        <div className="spotTitleLocBox">
                            <div className="spottitle">Name:{spot.name}</div>
                            <div className="spotLoc">Loc:{spot.city}, {spot.country}</div>
                        </div>
                        <div className="spotImgBox">
                        </div>
                        <div className="spotInfoBox">
                            <div className="spotPriceBox"></div>
                            <div className="spotDetailsBox">
                                <div className="spotDetails-property"></div>
                                <div className="spotDetails-description"></div>
                                <div className="spotDetails-placeinfo"></div>
                            </div>
                        </div>
                        <div className="spotReviewBox"></div>
                    </div>
                ) : (
                    <h2>Lisitng Doesn't exist</h2>
                )}
                </div>
            )}
        </div>
    )
}

export default IndividualSpot
