export function nextFourReverse(nums: number[]) {
  const result = [];
  const total = nums.reduce((acc, curr) => acc * curr, 1);

  for (let i = 0; i < nums.length; i++) {
    result.push(total/nums[i]);
  }

  return result;
}
