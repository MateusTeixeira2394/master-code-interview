/**
 * You are given an array prices where prices[i] is the price of 
 * a given stock on the ith day.
 *  You want to maximize your profit by choosing a single day to 
 *  buy one stock and choosing a different day in the future to 
 *  sell that stock.
 * @param {number[]} prices Is the price of a given stock on the ith day.
 * @return {number} The maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */
var maxProfit = function (prices) {

    if (prices.length === 1) return 0;

    let cache = [];

    function getHighestValue(index) {

        if (cache[index] !== undefined) return cache[index];

        if (index === prices.length - 1) {

            cache[index] = prices[index];

        } else {

            cache[index] = Math.max(getHighestValue(index + 1), prices[index]);

        }

        return cache[index];

    }

    let highestProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {

        let profit = getHighestValue(i + 1) - prices[i];

        highestProfit = Math.max(highestProfit, profit);

    }

    return highestProfit;

};

// 7,1,5,3,6,4

console.log(maxProfit([7, 1, 5, 3, 6, 4]));