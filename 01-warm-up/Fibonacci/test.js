const { fibonacci } = require("./fibonacci");

test("Fibonacci function must be declared as a function", () => {
    expect(typeof fibonacci).toEqual("function");
});

test("Fourth number of a fibonacci serie with f_1 = 1, f_2 = 1 must equal to 3", () => {
    expect(fibonacci(1, 1, 4)).toEqual(3);
});