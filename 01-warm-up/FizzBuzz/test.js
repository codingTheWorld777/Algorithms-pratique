const { fizzBuzz } = require("./fizzBuzz");

test("fizzBuzz must be declared as a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
});

test("The value which is connected to number 2 is 2", () => {
    expect(fizzBuzz(100)[1]).toEqual(2);
});

test("Number 15 that is multiple of 3 and 5 connected to FizzBuzz", () => {
    expect(fizzBuzz(100)[14]).toEqual("FizzBuzz");
});

test("Number 27 that is multiple of 3 (not of 5) connected to Fizz", () => {
    expect(fizzBuzz(100)[26]).toEqual("Fizz");
});

test("Number 25 that is multiple of 5 (not of 3) connected to Buzz", () => {
    expect(fizzBuzz(100)[24]).toEqual("Buzz");
});

test("The value which is connected to number 100 is Buzz", () => {
    expect(fizzBuzz(100)[99]).toEqual("Buzz");
});
