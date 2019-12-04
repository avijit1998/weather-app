const request = require('request');

// request({
//     url: 'https://api.darksky.net/forecast/88c2b9f5383885a48334393c609e1991/37.8267,-122.4233',
//     json: true
// },(error, response, body) => {
//     console.log(response.body.daily.data[0].summary);
//     // console.log(JSON.stringify(body,undefined,2));
//     // console.log(`Latitude:${body.latitude}`);
//     // console.log(`Longitude:${body.longitude}`);
// });

let lat = 0, long = 0;

request({
    url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiYXZpaml0OSIsImEiOiJjanRkOHg1bzYweTFmM3p0ZjloNnZkbWRvIn0.a-LYBhFRGQ5H3jQKYrSLLQ&limit=1',
    json: true
},(error, response) => {
    // console.log(response.body.daily.data[0].summary);
    // console.log(JSON.stringify(body,undefined,2));
    if(error){
    	console.log("This is a low level error");
    }
    else if(response.body.features.length == 0){
    	console.log("This higher level error");
    }
    else{
    	lat = response.body.features[0].center[1];
    	long = response.body.features[0].center[0];
		console.log(lat, long);
    	console.log(`Longitude:${body.features[0].center[0]}`);
    	console.log(`Latitude:${body.features[0].center[1]}`);
    }
});
