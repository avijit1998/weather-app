const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=36ca31126ce2b567848af80db88f46c8&query=" +
    latitude +
    "," +
    longitude;
  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect!", undefined);
      } else if (body.error) {
        callback(body.error.info, undefined);
      } else {
        callback(
          undefined,
          `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. But feels like ${body.current.feelslike} degrees.`
        );
      }
    }
  );
};

module.exports = forecast;
