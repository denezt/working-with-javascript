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
    await time(2000);
    console.log(`${supplies.filling[0]} was chosen.`);

    await time(0000);
    console.log("starting to prepare pie");

    await time(2000);
    console.log("The filling has been poured.");

    await time(2000);
    console.log(`Placing ${supplies.texture[1]} ingredients in a ${supplies.form[1]} form.`);

    await time(2000);
    console.log(`Oven was preheated.`);

    await time(2000);
    console.log(`Placed ${supplies.form[1]} form in oven.`);

    await time(1500);
    console.log(`Pie was baked for 10 mins, taking out of oven.`);

    await time(1500);
    console.log(`Placing ${supplies.toppings[2]} on pie.`);

    await time(1500);
    console.log(`Serve pie to customer.`);
  } catch (error) {
    console.log("Unable to serve customers",error);
  } finally {
    console.log("Thank you for visiting our cafe.");
  }
}

cafe();
