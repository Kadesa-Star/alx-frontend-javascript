// Create and export an instance of WeakMap
export const weakMap = new WeakMap();

// Function to track API queries
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize count to 0
  }

  // Get the current count and increment it
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count); // Update the count in the WeakMap

  // Check if the count is 5 or more, and throw an error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
