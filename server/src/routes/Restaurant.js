const express = require('express');

const RestaurantRoute = express.Router();
// const {verifyToken} = require('../middleware/auth');
// const {checkManagerType} = require('../middleware/TypeManager');

// const {checkTokenAndType} = require('../middleware/CheckTokenAndType');

const {verifyTokenRestaurant} = require("../middleware/restaurant");
const {CreateRestaurant, UpdateRestaurant, DeleteRestaurant} = require('../controler/restaurantInfo');

RestaurantRoute.post("/", verifyTokenRestaurant, CreateRestaurant);

RestaurantRoute.put('/:id', verifyTokenRestaurant, UpdateRestaurant);

RestaurantRoute.delete('/:id', verifyTokenRestaurant, DeleteRestaurant);

module.exports = {RestaurantRoute};