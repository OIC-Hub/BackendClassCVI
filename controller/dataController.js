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

const getDataById = (req, res) => {
  const {id} = req.params;
  const databyid = Data.find((single) => single.id === parseInt(id));
  res.status(200).send({message: "fetched", databyid});
}

const getData = (req, res) => {
    res.status(200).send({message: "data fetched successfully", Data})
}

const updateData = (req, res) => {
  const {id} = req.params;
  const {name, course, age} = req.body;
  const index = Data.findIndex((dta) => dta.id === parseInt(id));

  if(index === -1){
    res.status(404).send({message: "Not Found"});
    return;
  }

  Data[index] = {
    id: parseInt(id),
    name: name,
    course: course,
    age: age
  }

  // Data[index] = name;
  // Data[index] = course;
  // Data[index] = age;



  res.status(200).send({message: "Data updated"})
}

module.exports = {addData, getData, getDataById, updateData};