/**
 *You are a professional robber planning to rob houses along a street. Each house
 *has a certain amount of money stashed, the only constraint stopping you from 
 *robbing each of them is that adjacent houses have security systems connected 
 *and it will automatically contact the police if two adjacent houses were broken 
 *into on the same night.
 *
 * @param {number[]} nums Represents the amount of money of each house
 * @returns {number} The maximum amount of money you can rob tonight without alerting the police
 */
function rob(nums) {

    let cache = [];

    function robHelper(index) {

        if (index >= nums.length) return 0;

        if (cache[index] !== undefined) return cache[index];

        let currentMax = nums[index] + robHelper(index + 2);
        let neighborMax = robHelper(index + 1);

        cache[index] = Math.max(currentMax, neighborMax);

        return cache[index];

    }

    return robHelper(0);

}