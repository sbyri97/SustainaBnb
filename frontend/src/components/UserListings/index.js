import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
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

  const history = useHistory()

  const editButton = (e) => {
    e.preventDefault();
    let path = `/users/${activeUser.id}/spot/edit/${spot.id}`
    history.push(path)
  }

  const [deleteSpot, setheleteSpot] = useState()
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotActions.deleteSpot(spot.id, activeUser.id))
    setheleteSpot(true)
  }

  // if(!userSpotsArray) return null
  // console.log('this', userSpotsArray.length);
 if(activeUser) {
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
                 <thead className='tableHead'  key={'sbthd1'}>
                   <tr className='tableHeadRow' key={'sbtr1'}>
                     <th className='thListing' key={'sbtr2'}>
                       LISTING NAME
                     </th>
                     <th className='thStatus' key={'sbtr3'}>
                       STATUS
                     </th>
                     <th className='thBedrooms' key={'sbtr4'}>
                       BEDROOMS
                     </th>
                     <th className='thBeds' key={'sbtr5'}>
                       BEDS
                     </th>
                     <th className='thBaths' key={'sbtr6'}>
                       BATHS
                     </th>
                     <th className='thLocation' key={'sbtr7'}>
                       LOCATION
                     </th>
                     <th className='thEdit' key={'sbtr8'}>
                       VIEW SPOT
                     </th>
                     <th className='thEdit' key={'sbtr9'}>
                       MODIFY
                     </th>
                     <th className='thDelete' key={'sbtr10'}>
                       REMOVE
                     </th>
                   </tr>
                 </thead>
                 <tbody className='tableBody'>
                   {userSpotsArray.map((spot) =>
                   <tr className='tableBodyRow' key={spot.id}>
                       <th className="spotName">
                         {spot.name}
                       </th>
                       <th className="spotStatus">
                         <i className="fas fa-check" />
                       </th>
                       <th className="spotBedroom">
                         {spot?.bedroomCount}
                       </th>
                       <th className="spotBed">
                         {spot.bedCount}
                       </th>
                       <th className="spotBath">
                         {spot.bedCount}
                       </th>
                       <th className="spotLocation">
                         {spot.city}, {spot.country}
                       </th>
                       <th className="editButtons">
                         <button className="actualEdit"
                         onClick={(e) => {
                           e.preventDefault();
                           let path = `/spots/${spot.id}`
                           history.push(path)
                         }}>
                           View
                         </button>
                       </th>
                       <th className="editButtons">
                         <button className="actualEdit"
                         onClick={(e) => {
                           e.preventDefault();
                           let path = `/users/${activeUser.id}/spot/edit/${spot.id}`
                           history.push(path)
                         }}>
                           Edit
                         </button>
                       </th>
                       <th className="deleteButtons">
                         <button className="actualEdit"
                         onClick={(e) => {
                           e.preventDefault();
                           dispatch(spotActions.deleteSpot(spot.id, activeUser.id))
                           setheleteSpot(true)
                         }}>
                           Delete
                         </button>
                       </th>
                   </tr>)}
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
 } else {
   return <h1 className="pleaseLogin"> Please Login or Signup</h1>;
 }
}
