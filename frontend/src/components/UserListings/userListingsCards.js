import { Link } from "react-router-dom";
import './UserListings.css'

function UserListings({ spot, onDelete }) {
  const editButton = {
    
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
          <div className="editButtons">
            <button>
              Edit Listing
            </button>
          </div>
          <div className="deleteButtons">
            <button>
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
