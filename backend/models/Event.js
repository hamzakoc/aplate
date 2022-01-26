const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({

  eventName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  eventDate: {
    type: Date
  },

  eventImage: {
    data: Buffer,
    contentType: String
  }
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;