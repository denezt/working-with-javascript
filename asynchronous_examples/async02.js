const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000);
  });
}

const doSomething = async () => {
  // console.log(await doSomethingAsync());
  return await doSomethingAsync();
}

console.log('Before');
doSomething().then(console.log);
// console.log(doSomething());
console.log('After');
