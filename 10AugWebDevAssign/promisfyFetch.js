//  a promisified version of Fetch function

function enhancedFetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const timeout = options.timeout || 5000;

    // the request will be aborted if the promise is not resolved within the timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    options.signal = controller.signal;

    fetch(url, options)
      .then(response => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => {
        if (error.name === 'AbortError') {
          reject(new Error('Request timed out'));
        } else {
          reject(error);
        }
      });
  });
}

// Sample example to use above function
async function fetchData() {
  try {
    // Replace with a real API endpoint for testing
    const data = await enhancedFetch('https://dummy.restapiexample.com/api/v1/employees', { timeout: 3000 });
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the fetchData function
fetchData();