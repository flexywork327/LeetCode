/*
todo: Code Explanation

! This code is implementing the "Two Sum" problem in JavaScript. The problem asks to find two numbers in an array that add up to a given target value.

? Let's go through the code step by step:

    The function twoSum is defined, which takes in two parameters: nums (an array of numbers) and target (the target sum).

    Inside the function, a Map object is created using the new Map() syntax. A Map is a built-in JavaScript data structure that allows you to store key-value pairs.

    A for loop is used to iterate over each element in the nums array. The loop variable i represents the current index.

    Inside the loop, a variable complement is calculated by subtracting the current element nums[i] from the target. The complement represents the number that, when added to the current element, will result in the target sum.

    The complement is then logged to the console using console.log(complement). This is for debugging purposes and can be removed in a production environment.

    The code checks if the map already contains the complement as a key using the map.has(complement) method. If it does, it means that the current element and the complement add up to the target sum.

    If the complement is found in the map, the code returns an array containing the indices of the two numbers that add up to the target sum. The indices are retrieved using map.get(complement) (the index of the complement) and i (the current index).

    If the complement is not found in the map, the code adds the current element nums[i] as a key in the map with its corresponding index i as the value using map.set(nums[i], i).

    After the loop finishes, if no two numbers are found that add up to the target sum, the code returns an empty array [].

    Overall, this code efficiently solves the "Two Sum" problem by using a Map to store the elements of the array and their indices. It iterates through the array once, checking for the presence of the complement in the Map, resulting in a time complexity of O(n), where n is the length of the input array.


 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let map = new Map();
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(complement);

    if (map.has(complement)) {
      return console.log("i think answer line 1", [map.get(complement), i]);
    }
    console.log("i think answer line 2", map.set(nums[i], i));
  }
  return console.log([]);
};

twoSum([2, 7, 11, 15], 18);
twoSum([3, 2, 4], 7);
