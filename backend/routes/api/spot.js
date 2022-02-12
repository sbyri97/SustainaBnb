const express = require('express')
const asyncHandler = require('express-async-handler');

const { Spot, Review, User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/:spotId(\\d+)/review', asyncHandler(async (req, res) => {
  const { spotId } = req.params

  const reviews = await Review.findAll({
    where: {
      spotId
    },
    order: [["createdAt", "DESC"]],
    include: User,
  })

  return res.json(reviews)
}))

//get a single spot
router.get('/:spotId(\\d+)', asyncHandler(async (req, res) => {
  const { spotId } = req.params

  const singleSpot = await Spot.findByPk(spotId);

  if(singleSpot) {
    return res.json(singleSpot)
  } else {
    return res.json({"message": "Spot Not Found"})
  }

}));

router.post('/:spotId(\\d+)/review', asyncHandler(async (req, res) => {
  // return await Spot.findByPk(spot.id)
  const {userId, spotId, review} = req.body;

  const newReview = await Review.create({userId, spotId, review})

  return await Review.findByPk(newReview.id)

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
