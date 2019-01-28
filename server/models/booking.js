const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema ({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    nric:{
        type: String,
        required: [true, 'nric field is required']
    },
    room: {
        type: String,
        required: [true, 'room field is required']
    },
    date: {
        type: Date
    }

});

const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;