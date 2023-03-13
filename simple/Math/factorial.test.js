const factorial = require("./factorial");

test("factorial", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);

  expect(() => factorial(-2)).toThrow();
});
