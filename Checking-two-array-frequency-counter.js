
// Problem Statement: Check if the second array contains the squares of the values present in the first array, regardless of the order. The number of occurrences also matters.

// - Compare the lengths of the two arrays.
// - Create an object to store the frequencies of each value in both arrays.
// - Verify if each key from the first object has a corresponding square key in the second object.
// - Ensure that each key from the first object occurs the same number of times in the second object by comparing their values.

function isSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //create frequncy counter objects
  const fqc1 = {};
  const fqc2 = {};

  for (let i = 0; i < arr1.length; i++) {
    fqc1[arr1[i]] = (fqc1[arr1[i]] || 0) + 1;
    fqc2[arr2[i]] = (fqc2[arr2[i]] || 0) + 1;
  }

  console.log("fqc1", fqc1);
  console.log("fqc2", fqc2);

  for (let keys in fqc1) {
    if (key ** 2 in fqc2) {
      value1 = fqc1[key];
      value2 = fqc2[key ** 2];

      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
}

isSame([1, 2, 5, 2], [2, 4, 25, 4]);
