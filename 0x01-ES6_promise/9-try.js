export default function guardrail(mathFunction) {
  const queue = []; // Initialize an empty array to store results and messages

  try {
    queue.push(mathFunction()); // Call the mathFunction and push the result into the queue
  } catch (error) {
    queue.push(String(error)); // If an error occurs, push the error message into the queue
  } finally {
    queue.push('Guardrail was processed'); // Always push this message at the end
  }

  return queue; // Return the final queue
}
