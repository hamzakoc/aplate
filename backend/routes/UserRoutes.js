const express = require('express');

const userModel = require('../models/User');
const app = express();

//Read ALL
app.get('/api/v1/users', async (req, res) => {
  const user = await userModel.find({});


  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Create new
app.post('/api/v1/users', async (req, res) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Get by id
app.get('/api/v1/users/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const user = await userModel.findById(idfind);

  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/v1/users/:id', async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body)
    await userModel.save()
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/user/5d1f6c3e4b0b88fb1d257237

app.delete('/api/v1/users/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id)

    if (!user) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app