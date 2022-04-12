import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export default function MyAccount() {
    const activeUser = useSelector((state) => state.session.user);

    return (
        <div className='my-account-main-container'>

        </div>
    )
}
