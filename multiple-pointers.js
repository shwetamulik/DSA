// function that takes a sorted array as input and returns the count of unique elements
//  in the array
function multiplePointers(arr) {
    // Check if the input array is empty
    if (arr.length === 0) return 0;

    // Initialize two pointers, i and j
    var i = 0;

    // Start iterating through the array with j
    for (var j = 1; j < arr.length; j++) {
        // Compare the values at positions i and j
        if (arr[i] !== arr[j]) {
            // If different, increment i to move to the next unique element
            i++;
            // Replace the value at position i with the unique element at position j
            arr[i] = arr[j];
        }
    }

    // The value of i represents the index of the last unique element,
    // so adding 1 gives the count of unique elements in the array
    return i + 1;
}

// Example
multiplePointers([1,1,2,2,2,3,4,4,4,5,5,6,7,7,7]);

