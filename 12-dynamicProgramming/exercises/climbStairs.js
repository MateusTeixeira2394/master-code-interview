/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n 
 * @return {number}
 */
var climbStairs = function (n) {

    let cache = {};

    function climbStairsHelp(value) {

        if(cache[value] !== undefined) return cache[value];

        if (value <= 3) {

            cache[value] = value;

        } else {

            cache[value] = climbStairsHelp(value - 2) + climbStairsHelp(value - 1);

        }

        return cache[value];

    }

    return climbStairsHelp(n);

}
