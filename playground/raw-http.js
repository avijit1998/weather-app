const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=36ca31126ce2b567848af80db88f46c8&query=40,-75";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
