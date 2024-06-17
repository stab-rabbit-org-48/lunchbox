const Session = require('../models/sessionModel');
const sessionController = {};

/*
isLoggedIn: find the appropriate session for this request in the DB, then
verify whether or not the session is still valid
*/

sessionController.isLoggedIn = (req, res, next) => {
// Find the session in the database
    Session.findOne({ cookieId: req.cookie.ssid }), (err, session) => {
        if (err) {
            return next({
                log: 'Error occurred in sessionController.isLoggedIn',
                status: 500,
                message: { err: 'An error occurred' }
            });
        }
        else if (!session) {
            return res.status(401).json({ message: 'Session ended'})
        }
        else {
            return next();
        }
    }
}


sessionController.startSession = (req, res, next) => {
    Session.create({ cookieId: res.locals.user }, (err, session) => {
        if (err) {
            return next({
                log: 'Error occurred in sessionController.startSession',
                status: 500,
                message: { err: 'An error occurred'}
            });
        }
        else {
            return next();
         };
    });
};
   
   

module.exports = sessionController;