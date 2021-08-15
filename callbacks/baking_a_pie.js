let order = (call_preparation) => {
  console.log("Order is in and calling the preparation instruction.");
  call_preparation();
};

let preparation = () => {
  console.log("Order was received starting preparation.");
};

order(preparation);
