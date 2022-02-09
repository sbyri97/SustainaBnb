import { Link } from "react-router-dom";

function UserListings({ spot, onDelete }) {
  return (
    <div className="spotDetails">
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
        <p>
        <i className="far fa-person" />
          {spot.bedCount > 1 ? `${spot.bedCount} Beds` : "1 Bed"}
        </p>
        <p>
        <i className="fas fa-bath" />
          {spot.bathCount > 1 ? `${spot.bathCount} Baths` : "1 Bath"}
        </p>
      </div>
      {onDelete && (
          <button className="remove-listing" onClick={() => onDelete()}>Delete</button>
      )}
    </div>
  );
}

export default UserListings;
