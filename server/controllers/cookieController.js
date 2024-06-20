// Importing "User" to get Access
const User = require("../models/userModel");
const cookieController = {};

// Set cookie with a randome number
cookieController.setSSIDCookie = (req, res, next) => {
    console.log('adding cookies');
    res.cookie('ssid', res.locals.user._id, {
        httpOnly: true,
        secure: false,
        domain: 'localhost',
        path: '/api',
        sameSite: 'None',
        expires: new Date(Date.now() + 900000), // 15 minutes
    })
    res.cookie('test', 'value', {
        sameSite: 'None',
        secure: false
    })
    return next();
}

module.exports = cookieController;