const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//Read ALL
app.get('/api/v1/restaurants', async (req, res) => {
  const restaurant = await restaurantModel.find({});


  try {
    res.send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/api/v1/restaurants', async (req, res) => {
  const restaurant = new restaurantModel(req.body);

  try {
    await restaurant.save();
    res.send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Get  by id
app.get('/api/v1/restaurants/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const restaurant = await restaurantModel.findById(idfind);

  try {
    res.send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/v1/restaurants/:id', async (req, res) => {
  try {
    await restaurantModel.findByIdAndUpdate(req.params.id, req.body)
    await restaurantModel.save()
    res.send(restaurant)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/restaurant/5d1f6c3e4b0b88fb1d257237
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(req.params.id)

    if (!restaurant) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app