const express = require('express')
const asyncHandler = require('express-async-handler');

const { Spot } = require('../../db/models');

const router = express.Router();

// get to the form route
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { address, city, state, country, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      isApartment, isHouse, isEntirePlace, isPrivateRoom, userId } = req.body;

    const spot = await Spot.submit({ address, city, state, country, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      isApartment, isHouse, isEntirePlace, isPrivateRoom, userId });

    return res.json({
      spot
    });
    //unsuccessful users will be passed onto the sequelize validation error to next-error-handler
  })
);


  module.exports = router
