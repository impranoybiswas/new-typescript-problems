export function findMissingNumber(nums: number[]): number | null {
  const n = nums.length;
  const d = (nums[n - 1] - nums[0]) / n;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i + 1] - nums[i] !== d) {
      return nums[i] + d;
    }
  }
  return null;
}
