const express = require('express')
const asyncHandler = require('express-async-handler');

const { Spot, User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();


//get a single spot
router.get('/:spotId', asyncHandler(async (req, res) => {
  const { spotId } = req.params

  const singleSpot = await Spot.findByPk(spotId);

  return res.json(singleSpot)
}));

// post to the form route
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { address, city, state, country, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      propertyType, privacyType, userId } = req.body;

    const spot = await Spot.submit({ address, city, state, country, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      propertyType, privacyType, userId });

    return res.json({
      spot
    });
    //unsuccessful users will be passed onto the sequelize validation error to next-error-handler
  })
);


  module.exports = router
