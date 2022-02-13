const express = require('express')
const asyncHandler = require('express-async-handler');

const { Spot, User } = require('../../db/models');

const router = express.Router();

router.get( '/:userId(\\d+)', asyncHandler(async (req, res) => {
  const spots = await Spot.findAll()
  return res.json(spots)
}));




  module.exports = router
