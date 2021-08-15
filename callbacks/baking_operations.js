// This is an example of a "Callback Hell"

let supplies = {
  filling : ["apple","banana","cherry","lemon"],
  form: ["round","square"],
  texture: ["creamy","jelly","firm"],
  toppings : ["sprinkles","chocolate","glaze","sugar"]
};

let order = (pie_filling, call_preparation) => {
  setTimeout(() => {
    console.log(`The customer chose a ${supplies.filling[pie_filling]} filling.`);
    // Placing 'call_preparation' here will make
    // it run after the filling was selected.
    call_preparation();
  },1000);
  // Placing 'call_preparation' here will make it run out of order.
  // call_preparation();
};

let preparation = () => {
  setTimeout(() => {
    console.log("We are starting to prepare pie...");
    setTimeout(() => {
      console.log("The filling has been poured.");
      setTimeout(() => {
        console.log(`Placing ${supplies.texture[1]} ingredients in a ${supplies.form[1]} form.`);
        setTimeout(() => {
          console.log(`Oven was preheated.`);
          setTimeout(() => {
            console.log(`Placed ${supplies.form[1]} form in oven.`);
            setTimeout(() => {
              console.log(`Pie was cooked for 10 mins, taking out of oven.`);
              setTimeout(() => {
                console.log(`Placing ${supplies.toppings[2]} on pie.`);
                setTimeout(() => {
                  console.log(`Serve pie to customer.`);
                },1500);
              },1500);
            },1500);
          },500);
        },1000);
      },1000);
    },2000);
  },0000);
};

order(2, preparation);
