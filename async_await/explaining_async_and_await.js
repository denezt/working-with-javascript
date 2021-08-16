// This is an example of a cleaner code
// using Javascript Async and Await

let supplies = {
  filling : ["apple","banana","cherry","lemon"],
  form: ["round","square"],
  texture: ["creamy","jelly","firm"],
  toppings : ["sprinkles","chocolate","glaze","sugar"]
};

let is_cafe_open = true;

// Asking the customer which toppings they prefer
let toppings_choice = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Please choose your toppings."));
    },3000);
  });
};

async function bakery(){
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");
  // Need to ask the customer a question
  await toppings_choice();
  console.log(" D ");
  console.log(" E ");
}

bakery();

console.log("cleaning the machines");
console.log("wiping the tables");
console.log("taking orders");
