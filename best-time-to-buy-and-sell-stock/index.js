/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * Difficulty: Easy
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0], maxProfit = 0;

    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit;
};