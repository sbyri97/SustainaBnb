import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './UserListings.css'
import * as spotActions from '../../store/spot';
import { useState } from "react";

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
        <i class="fas fa-check" />
      </td>
      <td className="spotBedroom">
        {spot.bedroomCount}
      </td>
      <td className="spotBed">
        {spot.bedCount}
      </td>
      <td className="spotBath">
        {spot.bedCount}
      </td>
      <td className="spotLocation">
        {spot.city}, {spot.country}
      </td>
      <td className="editButtons">
        <button className="actualEdit"
        onClick={editButton}>
          Edit
        </button>
      </td>
      <td className="deleteButtons">
        <button className="actualEdit"
        onClick={handleDelete}>
          Delete
        </button>
      </td>
    </div>
  );
}

export default UserListings;
