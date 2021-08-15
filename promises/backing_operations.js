// This is an example of a "Callback Hell"

let supplies = {
  filling : ["apple","banana","cherry","lemon"],
  form: ["round","square"],
  texture: ["creamy","jelly","firm"],
  toppings : ["sprinkles","chocolate","glaze","sugar"]
};

let is_cafe_open = true;

// Relationship between 'time and work'
let order = (work, time) => {
  return new Promise((resolve,reject) => {
    if (is_cafe_open){
      setTimeout(()=> {
        resolve(work());
      },time);
    } else {
      reject(console.log("The cafe is closed."));
    }
  });
};

// Promise Chaining - this requires the 'return' keyword for each 'then'
order(() => console.log(`${supplies.filling[2]} was chosen`), 2000)
.then(() => {
  return order(() => console.log("We are starting to prepare pie..."), 0000);
}) // Example Promise chain
.then(() => {
  return order(() => console.log("The filling has been poured."), 2000);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Placing ${supplies.texture[1]} ingredients in a ${supplies.form[1]} form.`), 2000);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Oven was preheated.`), 1000);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Placed ${supplies.form[1]} form in oven.`), 500);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Pie was cooked for 10 mins, taking out of oven.`), 1500);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Placing ${supplies.toppings[2]} on pie.`), 1500);
}) // Example Promise chain
.then(() => {
  return order(() => console.log(`Serve pie to customer.`), 1500);
}) // Example Promise chain
.catch(()=>{
  console.log("Not able to serve pies.");
})
.finally(()=>{
  console.log("The cafe sign is advertising...");
});
