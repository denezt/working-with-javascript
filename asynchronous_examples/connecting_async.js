

const createAPromise = () => {
  console.log('Running: createAPromise');
  return new Promise(resolve => {
    setTimeout(() => resolve('Making a Promise'), 2000);
  });
}

const seeIfPromiseWasKept = async () => {
  const myPromise = await createAPromise();
  console.log('Running: seeIfPromiseWasKept');
  return myPromise + "|" + ' I guess Promise was kept';
}

const checkIfSeeIfPromiseWasKept = async () => {
  const ensurePromiseWasKept = await seeIfPromiseWasKept();
  console.log('Running: checkIfSeeIfPromiseWasKept');
  return ensurePromiseWasKept + "|" + ' Well it look like it was kept ;-)';
}

checkIfSeeIfPromiseWasKept().then(result => {
  console.log(result);
})
