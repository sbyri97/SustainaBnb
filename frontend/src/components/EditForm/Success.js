import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import * as spotActions from '../../store/spot';


export default function Success() {

    const user = useSelector((state) => state.session.user)
    const spot = useSelector((state) => state.spot.spot)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(spotActions.userListings())
        let path = `/api/users/${user.id}/spots`
        history.push(path)
    }
    return (
        <div>
            <h2>Congratulations on hosting your sustainable property</h2>
            <br />
            <button onClick={handleSubmit}>
                View Your Listings
            </button>
        </div>
    )
}
