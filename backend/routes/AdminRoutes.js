const express = require('express');
const adminModel = require('../models/Admin');
const app = express();

//Read ALL
app.get('/api/v1/admins', async (req, res) => {
  const admins = await adminModel.find({});


  try {
    res.send(admins);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/api/v1/admins', async (req, res) => {
  const admin = new adminModel(req.body);

  try {
    await admin.save();
    res.send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Get admin by id
app.get('/api/v1/admins/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const admins = await adminModel.findById(idfind);

  try {
    res.send(admins);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update Record
app.put('/api/v1/admins/:id', async (req, res) => {
  try {
    await adminModel.findByIdAndUpdate(req.params.id, req.body)
    await adminModel.save()
    res.send(admin)
  } catch (err) {
    res.status(500).send(err)
  }
})




//Delete Record
//localhost:8081/admin/5d1f6c3e4b0b88fb1d257237
app.delete('/api/v1/admins/:id', async (req, res) => {
  try {
    const admin = await adminModel.findByIdAndDelete(req.params.id)

    if (!admin) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app