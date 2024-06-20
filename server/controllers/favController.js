const Favorite = require('../models/favoriteModel');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const favController = {};

favController.addFavorite = async (req, res, next) => {
    try {
        const { username, password, label, calories, image, ingredients } = req.body;

        // Find the user by username
        // const user = await User.findOne({ username });
        // if (!user) {
        //     return res.status(400).json({ message: 'Invalid username or password' });
        // }

        // // Check if the password is correct
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Invalid username or password' });
        // }

        // If user is authenticated, add the favorite recipe
        const favorite = new Favorite({
            userId: user._id,
            label,
            calories,
            image,
            ingredients
        });

        await favorite.save();
        res.locals.favList = favorite;
        return next();
    } catch (err) {
        return next({
            log: `Error in favController.addFavorite: ${err.message}`,
            status: 400,
            message: { err: 'Error while adding to favorite list' }
        });
    }
};

// favController.getFavorite = async (req, res) => {
//     try {

//         const favList = await Favorite.findOne({ userId: req.user._Id });
//         if (!userId) {
//             return next({
//                 log: `Error in favController.addFavorite: user.id doesn\'t match ${err}`,
//                 status: 400,
//                 message: {
//                     err: 'An error occurred in favController.addFavorite'
//                 }
//             })
//         }

//         res.locals.renderFavList = favList;
//         return next;
//         //res.status(200).json(favList)

//     } catch (err) {
//         res.status(400).json({ message: 'Error in Favorite.getFavorite' , error: err.message })

//     }

// };

module.exports = favController;
