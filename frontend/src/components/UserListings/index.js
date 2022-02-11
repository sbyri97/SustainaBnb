import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spot';
import UserListings from './userListingsCards'
import './UserListings.css'


//here I need to get spots
export default function UserSpots() {
  const activeUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spot.spot);
  const userSpotsArray = Object.values(spot);
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (activeUser) {
      dispatch(spotActions.userListings(activeUser.id));
      setTimeout(() => {
        setIsLoading(false);
      }, 200)
    }
  }, [activeUser, dispatch]);

  // if(!userSpotsArray) return null
  // console.log('this', userSpotsArray.length);
  return (
    <div className="spots-cards">
      <h3 className="pageTitle">Your Listings</h3>
      {isloading ? (
        <p className='loading'>Loading</p>
      ) : (
        <div>
          {userSpotsArray && userSpotsArray.length > 0 ? (
            <div className='mainUserSpots'>
              <div className='mainTableDiv'>
              <table className="mainTable">
                <thead className='tableHead'>
                  <tr className='tableHeadRow'>
                    <th className='thListing'>
                      LISTING NAME
                    </th>
                    <th className='thStatus'>
                      STATUS
                    </th>
                    <th className='thBedrooms'>
                      BEDROOMS
                    </th>
                    <th className='thBeds'>
                      BEDS
                    </th>
                    <th className='thBaths'>
                      BATHS
                    </th>
                    <th className='thLocation'>
                      LOCATION
                    </th>
                    <th className='thEdit'>
                      MODIFY
                    </th>
                    <th className='thDelete'>
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody className='tableBody'>
                  {userSpotsArray.map((spot) => <tr className='tableBodyRow'><UserListings spot={spot} key={spot.id} /></tr>)}
                </tbody>
              </table>
              </div>
            </div>
          ) : (
            <h2>You do not have any listings</h2>
          )}
        </div>
      )}
    </div>
  );
}
