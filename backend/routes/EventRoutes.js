const express = require('express');
const eventModel = require('../models/Event');
const app = express();

//Read ALL
app.get('/api/v1/events', async (req, res) => {
  const events = await eventModel.find({});


  try {
    res.send(events);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/api/v1/events', async (req, res) => {
  const event = new eventModel(req.body);

  try {
    await event.save();
    res.send(event);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Get event by id
app.get('/api/v1/events/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const events = await eventModel.findById(idfind);

  try {
    res.send(events);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/v1/events/:id', async (req, res) => {
  try {
    await eventModel.findByIdAndUpdate(req.params.id, req.body)
    await eventModel.save()
    res.send(event)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/event/5d1f6c3e4b0b88fb1d257237
app.delete('/api/v1/events/:id', async (req, res) => {
  try {
    const event = await eventModel.findByIdAndDelete(req.params.id)

    if (!event) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app