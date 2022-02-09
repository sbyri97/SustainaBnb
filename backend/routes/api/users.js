const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Spot } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

router.get('/:userId(\\d+)/spots', restoreUser, asyncHandler(async (req, res) => {
  const { userId } = req.params
  const userSpots = await Spot.findAll({
    where: {
      userId
    }
  })

  return res.json(userSpots)
}))

router.put(`/:userId(\\d+)/spot/edit/:spotId`, asyncHandler(async(req, res) => {
  const { userId, spotId } = req.params
  const editSpot = await Spot.findByPk(spotId, {
    where: {
      userId
    }
  })

  return res.json(editSpot)
}));

router.delete('/:userId(\\d+)/spot/delete', asyncHandler(async(req, res) => {
  const { spotId } = req.body
  const { userId } = req.params
  const spot = await Spot.findByPk(spotId, {
    where: {
      userId
    }
  })
  const confirmedDelete = await spot.destroy();
  return res.json(spot.id)
}))


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user); //if user successfully created call this and return json

      return res.json({
        user
      });
      //unsuccessful users will be passed onto the sequelize validation error to next-error-handler
    })
  );


module.exports = router;
