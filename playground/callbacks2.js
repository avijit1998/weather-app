// setTimeout(() => {
// 	console.log("two seconds are up");
// },2000);

// const names = ['andrea','jackson','mike'];
// const shortNames = names.filter((name) => {
// 	return name.length <= 4
// });

// const geocode = (addresss, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 		latitude: 0,
// 		longitude: 0
// 	}

// 	callback(data)
// 	},2000)
// }

// geocode('peru',(data) => {
// 	console.log(data);	
// });


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (n1, n2, callback) => {
	setTimeout(() => {
		const n3 = n1 + n2;
		callback(n3)
	},2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

