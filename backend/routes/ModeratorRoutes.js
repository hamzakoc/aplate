const express = require('express');
const moderatorModel = require('../models/Moderator');
const app = express();

//Read ALL
app.get('/api/v1/moderators', async (req, res) => {
  const moderator = await moderatorModel.find({});


  try {
    res.send(moderator);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/api/v1/moderators', async (req, res) => {
  const moderator = new moderatorModel(req.body);

  try {
    await moderator.save();
    res.send(moderator);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get('/api/v1/moderators/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const moderator = await moderatorModel.findById(idfind);

  try {
    res.send(moderator);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/v1/moderators/:id', async (req, res) => {
  try {
    await moderatorModel.findByIdAndUpdate(req.params.id, req.body)
    await moderatorModel.save()
    res.send(moderator)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/moderator/5d1f6c3e4b0b88fb1d257237
app.delete('/api/v1/moderators/:id', async (req, res) => {
  try {
    const moderator = await moderatorModel.findByIdAndDelete(req.params.id)

    if (!moderator) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app