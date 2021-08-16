// This is an example of a cleaner code
// using Javascript Async and Await

let supplies = {
  filling : ["apple","banana","cherry","lemon"],
  form: ["round","square"],
  texture: ["creamy","jelly","firm"],
  toppings : ["sprinkles","chocolate","glaze","sugar"]
};

let is_cafe_open = true;

async function order(){
  try {
    await abc;
  }
  catch(error) {
    console.log("abc doesn't exist",error);
  }
  finally {
    console.log("runs code anyways");
  }
}

order()
.then(()=>{
  console.log('This is a test');
})
;
