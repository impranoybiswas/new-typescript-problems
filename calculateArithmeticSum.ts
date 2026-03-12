export function arithmeticSum(nums: number[]) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const a = nums[0];
  const n = nums.length;

  const d = nums[1] - nums[0];
  const sum = (n / 2) * (2 * a + (n - 1) * d);

  return sum;
}