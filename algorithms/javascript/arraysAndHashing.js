/*
 * Contains Duplicate Walue
 * Given an integer array nums,
 * return true if any value appears at least twice in the array.
 * return false if every element is distinct.
 * Constraints:
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */
const containsDuplicate = (nums) => {
    const occuringNumMap = new Map;
    let answer = false;
    
    nums.forEach((num) => {
        if(occuringNumMap.get(num)) {
            answer = true;
        }
        
        occuringNumMap.set(num, true);
    });
    
    return answer;
};

/*
 * Anagram
 * Given two strings s and t,
 * return true if t is an anagram of s,
 * and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */
const isAnagram = (s, t) => {
    const anagramMap = new Map(),
          comparableAnagramMap = new Map();
    
    // String size must be consistent unless we consider ignoring special characters.
    if (s.length !== t.length) return false;

    // Single item, just compare so I can get the naive submission through.
    if (s.length === 1 && s[0] !== t[0] ) return false; 
    
    // Fill our map up with characters and their # of occurrences in the first string.
    for (let i = 0; i < s.length; i++) {
        if (anagramMap.get(s[i])) {
            anagramMap.set(s[i], anagramMap.get(s[i]) + 1);
        } else {
            anagramMap.set(s[i], 1);
        }
    }
    
    // Fill our comparison map up with characters and their # of occurrences in the second string.
    for (let j = 0; j < t.length; j++) {
        if (comparableAnagramMap.get(t[j])) {
            comparableAnagramMap.set(t[j], comparableAnagramMap.get(t[j]) + 1);
        } else {
            comparableAnagramMap.set(t[j], 1);
        }
    }
    
    // Another uneccessary size match to prevent another loop if we can.
    if (anagramMap.size !== comparableAnagramMap.size) return false;
    
    // Each Map must have the same keys and key counts, or they are not anagrams.
    for (const [key, value] of anagramMap) {
        if (value !== comparableAnagramMap.get(key)) {
            return false;
        }
    }
    
    return true;
};

/*
 * Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 */
const twoSum = (nums, target) => {
    const hashMap = {},
          answerMap = new Map();
    
    let i = 0;
        
    while(i < nums.length) {
        if(typeof answerMap.get(target - nums[i]) === 'number') {
            return [answerMap.get(target - nums[i]), i];
        } else {
            answerMap.set(nums[i], i);
        }
        
        i++;
    }

    return [];
}
