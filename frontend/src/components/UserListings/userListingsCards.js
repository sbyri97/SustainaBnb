import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './UserListings.css'
import * as spotActions from '../../store/spot';
import { useEffect, useState } from "react";

function UserListings({ spot }) {
  const user = useSelector((state) => state.session.user)

  const dispatch = useDispatch()
  const history = useHistory()

  const editButton = (e) => {
    e.preventDefault();
    let path = `/api/users/${user.id}/spot/edit/${spot.id}`
    history.push(path)
  }

  const [deleteSpot, setDeleteSpot] = useState()
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotActions.deleteSpot(spot.id, user.id))
    setDeleteSpot(true)
  }
  return (
    <div>
      <td className="spotName">
        {spot.name}
      </td>
      <td className="spotStatus">
        Posted
      </td>
      <td className="spotBedroom">
        BR {spot.bedroomCount}
      </td>
      <td className="spotBed">
        Bed {spot.bedCount}
      </td>
      <td className="spotBath">
        Bt {spot.bedCount}
      </td>
      <td className="spotLocation">
        {spot.city}, {spot.country}
      </td>
      <td className="editButtons">
        <button onClick={editButton}>
          Edit Listing
        </button>
      </td>
      <td className="deleteButtons">
        <button onClick={handleDelete}>
          Delete Listing
        </button>
      </td>
    </div>
  );
}

export default UserListings;
