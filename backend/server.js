const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');
const restaurantRouter = require('./routes/RestaurantRoutes.js');
const moderatorRouter = require('./routes/ModeratorRoutes.js');
const eventRouter = require('./routes/EventRoutes.js');
const adminRouter = require('./routes/AdminRoutes.js');
var cors = require('cors')

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(cors())

//TODO - Replace you Connection String here

mongoose.connect('mongodb+srv://std:std1234@cluster0.b1201.mongodb.net/aplate',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost:27017/myapp');


app.use(userRouter);
app.use(restaurantRouter);
app.use(moderatorRouter);
app.use(eventRouter);
app.use(adminRouter);




const port = process.env.PORT || 9090
app.listen(port, () => { console.log('Server is running http://localhost:9090/') })