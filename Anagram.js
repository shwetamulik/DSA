// This function checks if two input strings are anagrams of each other.
function anagram(str1, str2) {
    // Remove spaces and convert both strings to lowercase for accurate comparison.
    str1 = str1.replace(/ /g, "").toLowerCase();
    str2 = str2.replace(/ /g, "").toLowerCase();
  
    // If the lengths of the modified strings are not equal, they can't be anagrams.
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create empty objects to store character counts for each string.
    let charCount1 = {};
    let charCount2 = {};
  
    // Populate the character count objects for both strings.
    for (let char of str1) {
      // If the character exists in the object, increment its count; otherwise, set it to 1.
      charCount1[char] ? (charCount1[char] += 1) : (charCount1[char] = 1);
      charCount2[char] ? (charCount2[char] += 1) : (charCount2[char] = 1);
    }
  
    // Compare the character counts in both objects to determine if they are anagrams.
    for (const letter in charCount1) {
      if (charCount1[letter] !== charCount2[letter]) {
        // If any character count doesn't match, the strings are not anagrams.
        return false;
      }
    }
  
    // If all character counts match, the strings are anagrams.
    return true;
  }
  
  // Example usage of the function to check if "apple" and "pplea" are anagrams.
  anagram("apple", "pplea"); // This will return true since the input strings are anagrams.
  