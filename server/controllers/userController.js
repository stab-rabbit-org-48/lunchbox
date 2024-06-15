const User = require('../models/userModel');
const userController = {};

userController.createUser = async (req, res, next) => {
    const {username, password} = req.body;
    try {
        const newUser = await User.create({ username, password });
        res.locals.user = newUser;
        return next();
    }
    catch (err) {
        return next({
            log: `userController.createUser: Error: ${err}`,
            status: 500,
            message: { err: 'Error creating user' },
        });
    }
};

userController.verifyUser = async (req, res, next) => {
    //extract username and password from req.body
    const { username, password } = req.body;
    try {
        //find user in the database by username
        const user = await User.findOne({ username });
        //if user is found and passwords match
        if (user && await bcrypt.compare(password, user.password)) {
            //If user's password matches the password stored, go to next middleware
            res.locals.user = user;
            return next();
        } else {
            return next({
                //If the password did not match, return log
                log: 'Invalid username or password',
                status: 500,
                message: ''
            })
        }
    }
    //global error handler
    catch (err) {
        return next({
            log: `Error in userController.verifyUser: ${err}`,
            status: 500,
            message: { err: 'Error verifying user' }
        });
    }
};

module.exports = userController;