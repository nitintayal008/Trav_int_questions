// ->//we check the first occurence should not be exit if it there then we push

// ->// we check with the previous one if it is oppsite then it is okay and if not we will push it

// ->// we check the last occerence also if it is enter then we push that also

function mismatches(records) {
  const missingExit = new Set();

  const missingEnter = new Set();

  const state = {};

  for (const [name, action] of records) {
    if (!(name in state)) {
      state[name] = false;
    }

    if (action === "enter") {
      if (state[name]) {
        missingExit.add(name);
      }

      state[name] = true;
    } else if (action === "exit") {
      if (!state[name]) {
        missingEnter.add(name);
      }
  
      state[name] = false;
    }
  }

  for (const name in state) {
    if (state[name]) {
      missingExit.add(name);
    }
  }

  return [Array.from(missingExit), Array.from(missingEnter)];
}

const records4 = [
  ["Raj", "enter"],

  ["Paul", "enter"],

  ["Paul", "exit"],

  ["Paul", "exit"],

  ["Paul", "enter"],

  ["Raj", "enter"],
];

// mismatches(records4) => [""Raj"", ""Paul""], [""Paul""]

console.log(mismatches(records4));
