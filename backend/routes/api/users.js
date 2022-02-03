const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

router.post(
    '/',
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
