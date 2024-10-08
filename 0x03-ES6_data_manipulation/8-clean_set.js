export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values starting with startString
    .map((value) => value.slice(startString.length)) // Remove the startString part
    .join('-'); // Join the results with a dash
}
