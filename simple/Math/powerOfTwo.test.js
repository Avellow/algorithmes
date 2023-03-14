const isPowerOfTwo = require("./powerOfTwo");

test("is power of two", () => {
  expect(isPowerOfTwo(1)).toBeTruthy(); // 2^0
  expect(isPowerOfTwo(2)).toBeTruthy(); // 2 ^ 1
  expect(isPowerOfTwo(5)).not.toBeTruthy();
  expect(isPowerOfTwo(6)).not.toBeTruthy();
  expect(isPowerOfTwo(8)).toBeTruthy();
  expect(isPowerOfTwo(-1)).not.toBeTruthy();
});
