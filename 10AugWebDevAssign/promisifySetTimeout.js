// Assignment Web Dev Class : 10 Aug 24

// Implement a promisified version of the setTimeout function
const setDelay = (ms, isReady = true) => new Promise((resolve, reject) => {

  setTimeout(() => {
    if (isReady) {
      resolve();
    } else {
      reject( new Error("Not ready yet") );
    }
  }, ms);
});

async function makePizza() {
try {
  console.log('Making pizza base');

  await setDelay(2000);
  console.log('Pizza base ready');

  await setDelay(3000);
  console.log('Adding cheese');

  await Promise.all([
    setDelay(2000).then(() => console.log('Adding ingredients')),
    setDelay(3000).then(() => console.log('Baking pizza')),

  ]);

  console.log('Pizza ready')
} catch (err) {
  console.error('Error:', err.message);
}
}

makePizza();

// Output
// Making pizza base
// Pizza base ready
// Adding cheese
// Adding ingredients
// Baking pizza
// Pizza ready