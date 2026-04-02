// Codewars Kata: Vowel Count
// Difficulty: 7 kyu

// Problem:
// Count how many vowels are in a string.

// Approach:
// I loop through each character in the string.
// If the character is a vowel, I increase the count by 1.

function getCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      count++;
    }
  }

  return count;
}
