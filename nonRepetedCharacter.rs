function findFirstNonRepeatedChar(str) {
  let charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Find the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated characters are found, return null
  return null;
}

// Example usage
let str = "abacddbec";
console.log(findFirstNonRepeatedChar(str)); // Output: 'e'
