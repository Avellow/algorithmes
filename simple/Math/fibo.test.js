const fibo = require("./fibo");

test("fibo", () => {
  expect(fibo(2)).toEqual([0, 1]);
  expect(fibo(3)).toEqual([0, 1, 1]);
  expect(fibo(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
