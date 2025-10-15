const Data = require('../models/Data')

const addData = (req, res) => {
  try {
    const { name, course, age } = req.body;

    if (!name || !course || !age) {
      res.status(400).send(JSON.stringify({ message: "Fill the Data" }));
      return;
    }

    const newData = {
      id: Data.length + 1,
      name: name,
      course: course,
      age: age,
    };

    Data.push(newData);
    res.status(200).send({ message: "Data added successfully" });
  } catch (error) {
    console.error(error);
  }
};

const getData = (req, res) => {
    res.status(200).send({message: "data fetched successfully", Data})
}

module.exports = {addData, getData};