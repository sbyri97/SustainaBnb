const e = require('express');
const express = require('express')
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models')
const router = express.Router();

const formatDate = (date) => {
    let anyDate = new Date(date);
    let year = anyDate.getFullYear();

    let month = (anyDate.getMonth() + 1).toString();
    if (month.length < 2) {
    month = '0' + month;
    }

    let day = anyDate.getDate().toString();
    if (day.length < 2) {
    day = '0' + day;
    }

    return [year, month, day].join('-');
}

router.post('/', asyncHandler(async(req, res) => {
    const {userId, spotId, startDate, endDate} = req.body;
    console.log('TSPIOT ID', spotId);
    const exisitingBookings = await Booking.findAll({
        where: {
            spotId: spotId
        }
    });

    let selectedStart = formatDate(startDate);
    let selectedEnd = formatDate(endDate);

    for (let i = 0; i < exisitingBookings.length; i++) {
        let currStart = formatDate(exisitingBookings[i].startDate);
        let currEnd = formatDate(exisitingBookings[i].endDate);

        if((selectedStart < currEnd) && (currStart < selectedEnd)) {
            return res.json({"error": "Property is already booked for thsoe dates. Please select new dates"})
        };
    };

    const newBooking = await Booking.create({userId, spotId, startDate, endDate})
    return res.json(newBooking)

}))

// router.get('/', asyncHandler(async(req, res) => {
//     const {userId, spotId, startDate, endDate} = req.body;

//     const exisitingBookings = await Booking.findAll({
//         where: {
//             spotId: 1
//         }
//     })

//     // const currentBookingsJson = res.json().then(console.log(res))

//     // const currentBookings = exisitingBookings.map(curr => console.log(curr.id))

//     // return console.log((currentBookings))
//     // return console.log('hi')
//     let selectedStart = formatDate(startDate)
//     let selectedEnd = formatDate(endDate)

//     for (let i = 0; i < exisitingBookings.length; i++) {
//         let currStart = formatDate(exisitingBookings[i].startDate)
//         let currEnd = formatDate(exisitingBookings[i].endDate)

//         if((selectedStart < currEnd) && (currStart < selectedEnd)) {
//             return res.json({"message": "Property is already booked for thsoe dates. Please select new dates"})
//         } else {
//             const newBooking = await Booking.create({userId, spotId, startDate, endDate})
//             return res.json(newBooking)
//         }
//     }
// }))





module.exports = router
