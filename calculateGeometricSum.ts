export function geometricSum(nums: number[]) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const a = nums[0];
  const r = nums[1] / nums[0];
  const n = nums.length;

  if (r === 1) return a * n;

  const sum = (a * (Math.pow(r, n) - 1)) / (r - 1);

  return sum;
}
