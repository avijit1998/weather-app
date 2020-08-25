const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=36ca31126ce2b567848af80db88f46c8&query=" +
    latitude +
    "," +
    longitude;
  request(
    {
      url: url,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback("Unable to connect!", undefined);
      } else if (response.body.error) {
        callback(response.body.error.info, undefined);
      } else {
        callback(
          undefined,
          `${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degrees out. But feels like ${response.body.current.feelslike} degrees.`
        );
      }
    }
  );
};

module.exports = forecast;
