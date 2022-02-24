// 1
function afterNYears(obj, n) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + n;
  }
  console.log(newObj);
}

const myFamily = {
  Joel: 32,
  Fred: 44,
  Reginald: 65,
  Susan: 33,
  Julian: 13,
};

afterNYears(myFamily, 1);
// 2
function freeShipping(order) {
  let sum = 0;

  for (let key in order) {
    sum += order[key];
  }

  return sum >= 50;
}

const order1 = { Shampoo: 5.99, "Rubber Ducks": 15.99 };
console.log(freeShipping(order1)); // false

const order2 = { "Flatscreen TV": 399.99 };
console.log(freeShipping({ "Flatscreen TV": 399.99 })); // false

//3
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function nameScore(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += scores[str.charAt(i).toUpperCase()];
  }

  if (sum <= 60) {
    console.log("NOT TOO GOOD");
  } else if (61 <= sum && sum <= 300) {
    console.log("VERY GOOD");
  } else if (301 <= sum && sum <= 599) {
    console.log("VERY GOOD");
  } else {
    console.log("THE BEST");
  }
}

nameScore("MUBASHIR"); // "THE BEST"
nameScore("YOU"); // "VERY GOOD"
nameScore("MATT"); // "THE BEST"
nameScore("PUBG"); // "NOT TOO GOOD"

// 4
function invert(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
const obj = { a: 1, b: 2, c: 3 };
console.log(invert(obj));

// 5
function totalAmountLost(stolenItems) {
  let sum = 0;
  for (let key in stolenItems) {
    sum += stolenItems[key];
  }

  if (sum == 0) {
    console.log("lucky you!");
  } else {
    console.log(sum);
  }
}

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

totalAmountLost(stolenItems1) / 100;

const stolenItems2 = {
  painting: 20000,
};

totalAmountLost(stolenItems2); // 20000

const stolenItems3 = {};

totalAmountLost(stolenItems3); // "Lucky You!"

// 6
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (name in GUEST_LIST) {
    console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`);
  } else {
    console.log("Hi! I'm a guest.");
  }
}

greeting("Randy"); // "Hi! I'm Randy, and I'm from Germany."
greeting("Sam"); // "Hi! I'm Sam, and I'm from Argentina."
greeting("Monti"); // "Hi! I'm a guest."

// 7
function oldest(obj) {
  let oldest = 0;
  let name = "";
  for (let key in obj) {
    if (oldest < obj[key]) {
      oldest = obj[key];
      name = key;
    }
  }

  console.log(name);
}
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29,
}); // "Emma"
