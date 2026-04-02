// Codewars Kata: Disemvowel Trolls
// Difficulty: 7 kyu

// 🧩 Problem:
// Remove all vowels (a, e, i, o, u) from a string.

// 💡 Approach:
// Use a regular expression to find all vowels
// and replace them with an empty string.

// 🚀 Solution:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
