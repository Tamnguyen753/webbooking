const express = require('express');
const StaffRoute = express.Router();

const {Register, Login, getStaff} = require('../controler/staffAccount');
const {verifyToken} = require('../middleware/auth');

StaffRoute.post("/register", Register);
StaffRoute.post("/login", Login);
StaffRoute.get("/", verifyToken, getStaff);

module.exports = {StaffRoute};