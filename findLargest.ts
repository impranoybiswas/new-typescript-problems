export function findLargest(nums: number[], position: number): number {
  const sorting = nums.sort((a, b) => b - a);
  return sorting[position];
}

