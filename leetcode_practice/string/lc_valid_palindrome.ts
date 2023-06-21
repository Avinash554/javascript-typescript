



/** LeetCode: 125. Valid Palindrome */
/** Solution 1: Using javascript in-built methods */
/**
const s = "A man, a plan, a canal: Panama";
const regexPattern = /[^A-Za-z0-9]/g;

const str = s.replace(regexPattern, '').toLowerCase();
const reverseStr = str.split('').reverse().join('');

console.log((str === reverseStr) ? true : false);  */
// return (str === reverseStr) ? true : false;

/**
Notes:
    https://linuxhint.com/remove-all-non-alphanumeric-characters-in-javascript/
*/
/***************************** Solution 1: End *****************************/
/** Solution 2: Using 'for loop' */
const s = 'A man, a plan, a canal: Panama';
let reverseStr = '';
const regexPattern = /[^a-z0-9]/gi;

const str = s.replace(regexPattern, '').toLowerCase();
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
console.log(str === reverseStr ? true : false);
// return (str === reverseStr ? true : false);

/**
Notes:
    Time complexity: linear O(n) because of '1 for loop'.
*/
/***************************** Solution 2: End *****************************/