



/** Concepts to learn and understand: regexPattern, replace() | split(), reverse(), join('') */
/** LeetCode: 125. Valid Palindrome */

/** Solution 1: Using javascript in-built methods */
const s = "A man, a plan, a canal: Panama";
const regexPattern = /[^A-Za-z0-9]/g;

const str = s.replace(regexPattern, '').toLowerCase();
const reverseStr = str.split('').reverse().join('');

console.log((str === reverseStr) ? true : false);
// return (str === reverseStr) ? true : false;

/**
Notes:
    https://linuxhint.com/remove-all-non-alphanumeric-characters-in-javascript/
*/
/***************************** Solution 1: End *****************************/