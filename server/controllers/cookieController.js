// Importing "User" to get Access
const User = require("../models/userModel");
const cookieController = {};

// Set cookie with a randome number
cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.user, {httpOnly: true});
    return next();
}

module.exports = cookieController;