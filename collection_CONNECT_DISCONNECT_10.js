function grouping(arr, sizeOf) {
  var store = {};

  var less = [];

  var more = [];

  for (const [state, name1, name2] of arr) {
    // Always initialize both users if not present

    if (!(name1 in store)) store[name1] = 0;

    if (!(name2 in store)) store[name2] = 0;

    if (state === "CONNECT") {
      store[name1]++;

      store[name2]++;
    } else if (state === "DISCONNECT") {
      store[name1]--;

      store[name2]--;
    }
  }

  for (let key in store) {
    if (store[key] < sizeOf) {
      less.push(key);
    } else {
      more.push(key);
    }
  }

  return [less, more];
}

events = [
  ["CONNECT", "Alice", "Bob"],

  ["DISCONNECT", "Bob", "Alice"],

  ["CONNECT", "Alice", "Charlie"],

  ["CONNECT", "Dennis", "Bob"],

  ["CONNECT", "Pam", "Dennis"],

  ["DISCONNECT", "Pam", "Dennis"],

  ["CONNECT", "Pam", "Dennis"],

  ["CONNECT", "Edward", "Bob"],

  ["CONNECT", "Dennis", "Charlie"],

  ["CONNECT", "Alice", "Nicole"],

  ["CONNECT", "Pam", "Edward"],

  ["DISCONNECT", "Dennis", "Charlie"],

  ["CONNECT", "Dennis", "Edward"],

  ["CONNECT", "Charlie", "Bob"],
];

console.log(grouping(events, 3));

// # => [["Alice", "Charlie", "Pam", "Nicole"], ["Dennis", "Bob", "Edward"]]

// grouping(events, 1)

// # => [[], ["Alice", "Charlie", "Dennis", "Bob", "Pam", "Edward", "Nicole"]]

// grouping(events, 10)

// # => [["Alice", "Charlie", "Dennis", "Bob", "Pam", "Edward", "Nicole"], []]
