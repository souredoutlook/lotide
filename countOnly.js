const countOnly = function(allItems, itemsToCount) {
  const countedItems = {};
    for (let item of allItems) {
        if (itemsToCount[item]) {
          countedItems[item] !== undefined ? countedItems[item] += 1 : countedItems[item] = 1;
        }
      }
  return countedItems;
};

module.exports = countOnly;

