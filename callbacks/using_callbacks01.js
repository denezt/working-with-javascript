// Examples of calling a function in another function
function first(call_second){
  console.log("First Instruction");
  call_second();
}

function second(){
  console.log("Second Instruction");
}

first(second);
