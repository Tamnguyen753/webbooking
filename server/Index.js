const express = require('express');
const {StaffRoute} = require('./src/routes/staff');
const {RestaurantRoute} = require('./src/routes/Restaurant');
const app = express()
app.use(express.json())

app.use("/api/staff", StaffRoute);
app.use("/api/restaurants", RestaurantRoute);


app.listen(3000, () => {
    console.log("Server chạy thành công !");
})
