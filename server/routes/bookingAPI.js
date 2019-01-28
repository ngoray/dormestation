const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/bookings/:username/:nric', (req, res2) => {
    var username = req.params.username;
    var nric = req.params.nric;

    Booking.findOne({ "name": username }, {
        nric: 1, 
        room: 1,
        _id: 0
    }, function (err, result) {
        bcrypt.compare(nric, result.nric, function (err, res) {
            if (res) {
                res2.send([{ "auth": true, "name": result.username }]);
            } else {
                res2.send([{ "auth": false }]);
            }
        });
    });
});
router.get('/bookings/:name/:nric/:room', (req, res) => {
    bcrypt.hash(req.params.nric, BCRYPT_SALT_ROUNDS, function (err, hash) {
        Booking.save({
            "name": req.params.name, 
            "nric": hash, 
            "room": req.params.room
        }, (err, result) => {

        });
    });
});

router.get('/bookings', function(req, res){
 Booking.find((err, get)=> {
    if (err) return res.status(500).send(err)
    return res.status(200).send(get);
 });
});

router.post('/bookings', function(req, res){
    var booking = new Booking(req.body);
    Booking.create(req.body).then(function(booking){
        res.send(booking);
    });
});

router.put('/bookinsg/:id', function(req, res){
    Booking.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
       Booking.findOne({_id: req.params.id}).then(function(booking){
        res.send({booking});
       });
    });
});

router.delete('/bookings/:id', function(req, res){
    Booking.findByIdAndRemove({_id: req.params.id}).then(function(booking){
        res.send(booking);
    });
});

module.exports = router;