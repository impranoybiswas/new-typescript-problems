export function total(nums: number[]) {
  const result = nums.reduce((acc, curr) => acc + curr, 0);
  return result;
}

export function total2(nums: number[]) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

