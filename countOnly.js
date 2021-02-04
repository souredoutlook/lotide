const passEmoji = String.fromCodePoint(0x1F49A);
const failEmoji = String.fromCodePoint(0x1F198);

const assertEqual = function(actual, expected) {
  if (typeof(actual) === "string") {
    actual = `"${actual}"`;
  }
  if (typeof(expected) === "string") {
    expected = `"${expected}"`;
  }
  if (actual === expected) {
    console.log(`${passEmoji}${passEmoji}${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}${failEmoji}${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   const countedItems = {};
//   for (let countedItem of Object.keys(itemsToCount)) {
//     if (itemsToCount[countedItem]) {
//       for (let item of allItems) {
//         if (item === countedItem) {
//           countedItems[countedItem] !== undefined ? countedItems[countedItem] += 1 : countedItems[countedItem] = 1;
//         }
//       }
//     }
//   }
//   return countedItems;
// };

const countOnly = function(allItems, itemsToCount) {
  const countedItems = {};
    for (let item of allItems) {
        if (itemsToCount[item]) {
          countedItems[item] !== undefined ? countedItems[item] += 1 : countedItems[item] = 1;
        }
      }
  return countedItems;
};

// TEST CODE

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Foo", "Foo");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual(true, true);
// assertEqual(true, false);
// assertEqual(1, "Foo");
// assertEqual("1", "Foo");