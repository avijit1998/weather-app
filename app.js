const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv.slice(2).join(" ");

if (location) {
  geocode(location, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(location);
        console.log("Forecast:", forecastData);
      });
    }
  });
} else {
  console.log("Location field empty.");
}
