const source: number[] = [11, 2, 15, 7, 6, 3];

function twoSum(nums: number[], target: number): number[] {
  const set: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in set) {
      return [set[diff], i];
    } else {
      set[nums[i]] = i;
    }
  }

  return [];
}

const sum = twoSum(source, 9);
console.log(sum);
