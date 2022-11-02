/*
 * Valid Palindrome
 * Given a string s,
 * return true if it is a palindrome,
 * or false otherwise.
 */
const isPalindrome = (s) => {
    let i = 0,
        j = s.length - 1;

    while (i < j) {  
        const leftPointerAtInvalidPoint = s[i].match(/[\W_]+/g),
              rightPointerAtInvalidPoint = s[j].match(/[\W_]+/g);
        
        if (leftPointerAtInvalidPoint) i++;
        if (rightPointerAtInvalidPoint) j--;
        
        if (!leftPointerAtInvalidPoint && !rightPointerAtInvalidPoint) {
            if (s[i].toLowerCase() === s[j].toLowerCase()) {
                i++;
                j--;    
            } else {
                return false;   
            }
        }
    }
    
    return true;
};


/*
 * Two Sum II, input array sorted
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers,
 * index1 and index2,
 * added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution.
 * You may not use the same element twice.
 * Your solution must use only constant extra space.
 */
const twoSum = (numbers, target) => {
    let leftPointer = 0,
        rightPointer = numbers.length - 1;
    
    while (leftPointer < rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] === target) {
            return [leftPointer + 1, rightPointer + 1];
        }
        
        if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer--;
        }
        
        if (numbers[leftPointer] + numbers[rightPointer] < target) {
            leftPointer++;
        }
    }
};

/*
 * 3Sum
 * Given an integer array nums,
 * return all the triplets [nums[i], nums[j], nums[k]] such that:
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (nums) => {
    // Sort the array to make our lives easier.
    const sortedNums = nums.sort((a, b) => a - b),
          answerSet = [];
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] > 0) break;
        if (i === 0 || sortedNums[i] !== sortedNums[i - 1]) {
            const occurringNums = new Set();
            
            for (let j = i + 1; j < nums.length; j++) {
                const target = -sortedNums[i] - sortedNums[j];
                
                if (occurringNums.has(target)) {
                    answerSet.push([sortedNums[i], sortedNums[j], target]);

                    while (j + 1 < sortedNums.length && sortedNums[j] === sortedNums[j + 1]) {
                        j++;
                    }
                }
                occurringNums.add(sortedNums[j]);
            }
        }
    }
    
    return answerSet;
};
