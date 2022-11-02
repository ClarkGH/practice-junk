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

/*
 * Best Time to Buy and Sell Stock.
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */
const maxProfit = (prices) => {
    let i = 0,
        j = 1,
        maxVal = 0;
    
    while (j < prices.length) {
        // Move the window forward.
        if (prices[i] >= prices[j]) {
            i = j;
        }
        
        // Check if the growth has provided a larger value and set it.
        maxVal = Math.max(prices[j] - prices[i], maxVal);
        
                
        // Grow the window.
        j++;
    }
    
    return maxVal;
};

/*
 * Longest Substring Without Repeating Characters.
 * Given a string s,
 * find the length of the longest substring without repeating characters.
 */
const lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0,
        longestLength = 0,
        charSet = new Set();

    while(j < s.length) {
        while (charSet.has(s[j])) {
            charSet.delete(s[i])
            i++;
        }

        charSet.add(s[j]);
        longestLength = Math.max(longestLength, charSet.size);
        j++;
    } 
    
    return longestLength;
};
