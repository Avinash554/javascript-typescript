



/** LeetCode: 21.Merge Two Sorted Lists */
/** Solution 1: Using 'for loop & sort()' method */
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    if (!list1.length && !list2.length) {
        return [];
    }
    for (let i = 0; i < list2.length; i++) {
        list1.push(list2[i]);
    }
    return list1.sort();
};

/**
Notes:
    Time complexity: linear O(n)


    https://leetcode.com/problems/merge-two-sorted-lists/solutions/341711/clean-javascript/
    https://leetcode.com/problems/merge-two-sorted-lists/solutions/9963/simple-javascript-solution/
    https://leetcode.com/problems/merge-two-sorted-lists/solutions/238175/10-line-javascript-recursion/
    https://leetcode.com/problems/merge-two-sorted-lists/solutions/1131818/javascript-faster-than-100/

    https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript

 */
/***************************** Solution 1: End *****************************/