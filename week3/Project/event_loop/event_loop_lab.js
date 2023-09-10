// event_loop_lab.js

console.log("Start of script");

setTimeout(() => {
  console.log("Callback 1: This is a non-blocking operation.");
}, 3000);

setTimeout(() => {
  console.log("Callback 2: This is another non-blocking operation.");
}, 1500);

setTimeout(() => {
  console.log("Callback 3: Yet another non-blocking operation.");
}, 300);

console.log("End of script");