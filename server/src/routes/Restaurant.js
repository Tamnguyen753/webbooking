const express = require('express');

const RestaurantRoute = express.Router();
// const {verifyToken} = require('../middleware/auth');
// const {checkManagerType} = require('../middleware/TypeManager');
const {checkTokenAndType} = require('../middleware/CheckTokenAndType');

const {CreateRestaurant, UpdateRestaurant, DeleteRestaurant} = require('../controler/restaurantInfo');

RestaurantRoute.post("/", checkTokenAndType, CreateRestaurant);

RestaurantRoute.put('/:id', checkTokenAndType, UpdateRestaurant);

RestaurantRoute.delete('/:id', checkTokenAndType, DeleteRestaurant);

module.exports = {RestaurantRoute};