const fizzBuzz = (range) => {
    let setOfValues = [];

    for (let i = 1; i <= range; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
            setOfValues.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
            setOfValues.push("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
            setOfValues.push("Fizz");
        } else {
            console.log(i);
            setOfValues.push(i);
        }
    }

    return setOfValues;
};

module.exports = { fizzBuzz };
