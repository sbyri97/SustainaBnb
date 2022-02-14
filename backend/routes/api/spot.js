const express = require('express')
const asyncHandler = require('express-async-handler');

const { Spot, Review, User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

const validateReview = [
  check('review')
    .exists({checkFalsy: true})
    .withMessage('Must enter a review.'),
  handleValidationErrors
]

router.delete('/review/delete', asyncHandler(async (req, res) => {
  const { reviewId } = req.body

  const review = await Review.findByPk(reviewId)

  const delReview = await review.destroy()
  return res.json(review.id)
}));



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

router.post('/:spotId(\\d+)/review', asyncHandler(async (req, res) => {
  // return await Spot.findByPk(spot.id)
  const {userId, spotId, review} = req.body;

  const newReview = await Review.create({userId, spotId, review})

  const awaited = await Review.findByPk(newReview.id)

}));

//get a single spot
router.get('/:spotId(\\d+)', asyncHandler(async (req, res) => {
  const { spotId } = req.params

  const singleSpot = await Spot.findByPk(spotId, {
    include: User
  });

  if(singleSpot) {
    return res.json(singleSpot)
  } else {
    return res.json({"message": "Spot Not Found"})
  }

}));

router.get('/spotsbycity/:city', asyncHandler(async (req, res) => {
  const { city } = req.params

  const citySpots = await Spot.findAll({
    where: {
      city: city
    },
    include: Review
  });

  return res.json(citySpots)
}))

// post to the form route
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { address, city, state, country, imageUrl, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      propertyType, privacyType, userId } = req.body;

    const spot = await Spot.submit({ address, city, state, country, imageUrl, guestCount,
      bedCount, bedroomCount, bathCount, name, price, description,
      propertyType, privacyType, userId });

    return res.json({
      spot
    });
    //unsuccessful users will be passed onto the sequelize validation error to next-error-handler
  })
);

router.get('/', asyncHandler(async (req, res) => {

  const allSpots = await Spot.findAll({include: Review});

  return res.json(allSpots)
}))





  module.exports = router
