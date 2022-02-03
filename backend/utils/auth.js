const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const{ User } = require('../db/models');

const { secret, expiresIn } =jwtConfig;


// sets the JWT cookie after login/signup.
// takes in a response and the user of the session and it will generate a JWT using the secret
// paylaod or info for the JWT is the return value of .toSafeObject

const setTokenCookie = (res, user) => {
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) }
    );

    const isProduction = process.env.NODE_ENV === 'production';

    // need to set the token cookie using res.cookie. token in this case is the jwt.sign()
    res.cookie('token', token, {
        maxAge: expiresIn * 1000, // max age is written in millisecs
        httpOnly: true,
        secure: isProduction, // this means that the cookie is used only during production
        sameSite: isProduction && "Lax"
    });

    return token;
};

// resore the session of the user based on JWT cookie
// this func will parse the JWT paylaod and search the db for the user
// if user is found the key of user will be saved to the request
// any error with verification clear the token from cookie res

const restoreUser = (req, res, next) => {
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if(err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if(!req.user) res.clearCookie('token');

        return next();
    });
};

// this next func is to authenticate a session user to access a route

const requireAuth = [
    restoreUser, //ensures that a valid JWT cookie exists and the user will be loaded to req.user
    function (req, res, next) {
        if(req.user) return next(); // this checks req.user and sends it to the next midware

        const err = new Error('Unauthorized');
        err.title = 'Unauthorized'
        err.errors = ['Unauthorized']
        err.status = 401;
        return next(err);

    }
];

//restoreUser and reqAuth are premiddleware to route handlers


module.exports = { setTokenCookie, restoreUser, requireAuth };
