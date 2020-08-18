const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log('CONECTED TO DB!');
    // DBdebug('CONECTED TO DB!');
  })
  .catch((err) => {
    console.log(`could not connect : => ${err}`);
    // DBdebug(`could not connect : => ${err}`);
  });


const myMeasurmentsScema = new mongoose.Schema({
    id: Number,
    weight: Number,
    date: { type: Date, default: Date.now }
  });
  
  const ListOfMeasurments = mongoose.model('listOfMeasurments', myMeasurmentsScema);


async function getMeasurmentFromDb(res) {
    let measurments = await ListOfMeasurments.find({})
        .then(response => response)
        .catch(err => console.log(err));
    res.status(200).send(measurments);
};

async function insertWeightDocumentintoDb(data) {
  const measurment = new ListOfMeasurments({
    weight: data.weight
  });
  await measurment.save();
};
async function deleteUserWeightDataFromDb(data) {
  const measurment = await ListOfMeasurments.findOneAndDelete({_id:data._id});
  console.log("measurment");
  console.log(measurment);
};




module.exports.getMeasurmentFromDb = getMeasurmentFromDb;
module.exports.insertWeightDocumentintoDb = insertWeightDocumentintoDb;
module.exports.deleteUserWeightDataFromDb = deleteUserWeightDataFromDb;