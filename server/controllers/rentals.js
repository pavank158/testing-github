
const Rental = require('../models/rental');


// const rentals = [
//     {
//       _id: '2137129312',
//       city: 'New York',
//       title: 'Very nice place'
//     },
//     {
//       _id: 'asjkdajdasnda',
//       city: 'Berlin',
//       title: 'Very nice place as well!'
//     },
//   ]

  
exports.getRentals = (req, res) => {
    // return res.json(rentals);
    Rental.find({}, (error,foundRental) => {
        // if(error){
        //     // return res.status(422).send({errors: [{title:'Rental Error',message:'error message'}]})
        //     return Rental
        // .sendError(res, { status: 422, detail: 'Cannot retrieve rental data!'});
        // }
        if (error) { return res.mongoError(error); }
        return res.json(foundRental);

    })
}

exports.getRentalById =  (req, res) => {
    const { rentalId } = req.params;
    Rental.findById(rentalId,(error,foundRental ) =>{
        // if(error){
        //     // return res.status(422).send({errors: [{title:'Rental Error',message:'error message'}]})
        //     return Rental
        // .sendError(res, { status: 422, detail: 'Cannot retrieve rental data!'});
        // }  
        if (error) { return res.mongoError(error); }
        return res.json(foundRental)

    })
}

exports.createRental = (req, res) => {
    const rentalData = req.body;


    // rentals.push(rentalData);
    // const newRental = new Rental(rentalData);
    // return res.json({message: `Rental with id: ${rentalData._id} was added!`});
    Rental.create(rentalData, (error, createdRental) => {
        // if (error) {
        // //   return res.status(422).send({errors: [{title: 'Rental Error!', message: 'Cannot post rental data!'}]})
        // return Rental
        // .sendError(res, { status: 422, detail: 'Cannot post rental data!'});
        // }
        if (error) { return res.mongoError(error); }
        return res.json({message: `Rental with id: ${createdRental._id} was added!`});
      })
}

// exports.deleteRental = (req, res) => {
//     const { id } = req.params;
//     const rIndex = rentals.findIndex(r => r._id === id);
  
//     rentals.splice(rIndex, 1);
//     return res.json({message: `Rental with id: ${id} was removed!`});
// }

// exports.updateRental = (req, res) => {
//     const { id } = req.params;
//     const rentalToUpdate = req.body;
//     const rIndex = rentals.findIndex(r => r._id === id);
  
//     rentals[rIndex].city = rentalToUpdate.city;
//     rentals[rIndex].title = rentalToUpdate.title;
// return res.json({message: `Rental with id: ${id} was updated!`});

// }