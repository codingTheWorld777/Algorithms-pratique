/**
 * Fibonacci serie by using recursion algorithm
 * We can define by ourself the first and the second rang of the serie
 * @param {*} f1 : First value of the first rang in Fibonacci serie
 * @param {*} f2 : Second value of the second rang in Fibonacci serie
 * @param {*} lId : Last index of the last number that we want to calculate
 */
const fibonacci = (f1, f2, lId) => {
    if (lId === 1) return f1;
    else if (lId === 2) return f2;
    else if (lId < 0) return 'Wrong parameter';
    else {
        let count = 3;
    
        const fibonacciRecursion = (f_1, f_2, _lId, count) => {
            if (count < _lId) return fibonacciRecursion(f_2, f_1 + f_2, _lId, count + 1);
            else {
                console.log(`F_${_lId} = ${f_1 + f_2}`);
                return f_1 + f_2;
            };
        };

        return fibonacciRecursion(f1, f2, lId, count);
    }
};

module.exports = { fibonacci };