const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js');
const spotRouter = require('./spot')
const homeRouter = require('./home')
const bookingRouter = require('./booking')

router.use('/booking', bookingRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spot', spotRouter);

router.use('/', homeRouter);



module.exports = router;









// // GET /api/set-token-cookie(TESTING)
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));


// // GET /api/restore-user(TESTING)
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth(TESTING)
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
