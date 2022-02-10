import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './UserListings.css'
import * as spotActions from '../../store/spot';
import { useEffect } from "react";


function UserListings({ spot, onDelete }) {
  const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const editButton = (e) => {
    e.preventDefault();
    let path = `/api/users/${user.id}/spot/edit/${spot.id}`
    history.push(path)
  }



  return (
      <div className="column-spotDetails">
        <div className="spotCard">
          <div className="name-column"></div>
          <h3 className="spotName">
            {spot.name}
          </h3>
          <p className="spotLocation">
            <i className="fas fa-location-pin" />
            {spot.address}, {spot.city}
          </p>
          <p className="spotPrice">
            ${spot.price}/ Night
          </p>
          <div className="spotFloorPlan">
            <p>
            <i className="fas fa-user" />
              {spot.guestCount > 1 ? `${spot.guestCount} Guests` : "1 Guest"}
            </p>
            <p>
            <i className="fas fa-bed" />
              {spot.bedroomCount > 1 ? `${spot.bedroomCount} Bedrooms` : "1 Bedroom"}
            </p>
          </div>
          <div className="buttons">
            <button
            className="theButton"
            onClick={editButton}>
              Edit Listing
            </button>
          </div>
          <div className="buttons">
            <button
            className="theButton"
            >
              Delete Listing
            </button>
          </div>
          {onDelete && (
              <button className="remove-listing" onClick={() => onDelete()}>Delete</button>
          )}
        </div>
      </div>
  );
}

export default UserListings;
