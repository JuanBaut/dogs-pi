const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const allDogsHandler = (req, res) => {
  axios
    .get(
      "https://api.thedogapi.com/v1/breeds",
      (headers = { "x-api-key": API_KEY }),
    )
    .then((response) => {
      let dogs = response.data;
      res.status(200).json(dogs);
    })
    .catch((error) => {
      console.log(error);
    });
};

const idHandler = (req, res) => {};
const nameHandler = (req, res) => {};
const createHandler = (req, res) => {};

module.exports = { allDogsHandler, idHandler, nameHandler, createHandler };
