const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Philadelphia New York", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

forecast(-75.7088, 44.1545, (error, data) => {
  if (error) console.log("Error", error);
  console.log("Forecast:", data);
});
