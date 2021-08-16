// This is an example of a cleaner code
// using Javascript Async and Await

let supplies = {
  filling : ["apple","banana","cherry","lemon"],
  form: ["round","square"],
  texture: ["creamy","jelly","firm"],
  toppings : ["sprinkles","chocolate","glaze","sugar"]
};

let is_cafe_open = true;

function time(ms){
  return new Promise((resolve,reject) => {
    if (is_cafe_open){
      setTimeout(resolve, ms);
    } else {
      reject("The Cafe is closed");
    }
  });
}

async function cafe(){
  try {

  } catch (error) {
    console.log("Unable to serve customers",error);
  } finally {
    console.log("Thank you for visiting our cafe.");
  }
}

cafe();
