function total(nums: number[]) {
  const result = nums.reduce((acc, curr) => acc + curr);
  return result;
}

function total2(nums: number[]) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

export { total, total2 };
