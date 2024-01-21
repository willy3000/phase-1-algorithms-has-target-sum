function hasTargetSum(array, target) {
  // Write your algorithm here
  const isTargetMetArray = [];
  array.map((value, index) => {
    array.map((val, i) => {
      if (i !== index) {
        isTargetMetArray.push(value + val === target);
      }
    });
  });
  if (isTargetMetArray.includes(true)) {
    return true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) + O(n*n)*n + O(n)
*/

/* 
  Add your pseudocode here
  1. Create an empty array called `isTargetMetArray` to store boolean values of whether or not values add up to target
  2. map through the array.
  3. for every value add each value in the array except for the value corresponding to it's own index
  4. store true or false in the array depending on whether the values add up to target.
  5. check if the array includes any instance of true.
  4. return true if the array includes true otherwise return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
