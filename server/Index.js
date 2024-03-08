import express from 'express'
import { StaffRoute } from './src/routes/staff'
import { RestaurantRoute } from './src/routes/Restaurant';
const app = express()
app.use(express.json())

app.use("/api/staff", StaffRoute);
app.use("/api/restaurants", RestaurantRoute);


app.listen(3000, () => {
    console.log("Server chạy thành công !");
})
