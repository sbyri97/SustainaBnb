const express = require('express')
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/booking')
const router = express.Router();

router.post('/', asyncHandler(async(req, res) => {
    const {userId, spotId, startDate, endDate} = req.body;

    const newBooking = await Booking.create({userId, spotId, startDate, endDate})

    
}))






module.exports = router
