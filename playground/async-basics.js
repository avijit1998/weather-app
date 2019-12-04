console.log("starting app");

setTimeout(() => {
    console.log("inside the callback");    
}, 2000);

setTimeout(() => {
    console.log("second callback works");
    
}, 0);

console.log("finishing app");
