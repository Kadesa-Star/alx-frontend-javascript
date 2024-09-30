// 0-constants.js

// Use const for the task variable in taskFirst
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Changed from var to const
  return task;
}

export function getLast() {
  return ' is okay';
}

// Use let for the combination variable in taskNext
export function taskNext() {
  let combination = 'But sometimes let'; // Changed from var to let
  combination += getLast();

  return combination;
}
