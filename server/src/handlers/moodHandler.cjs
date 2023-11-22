const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const moodHandler = (req, res) => {
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

module.exports = { moodHandler };
