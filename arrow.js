// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// function declaration below
const doubleIt = function(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);

const doubleIt2 = num => num * 7;
const result2 = doubleIt2(5);
console.log(result2);

const add = (x, y) => x + y;
const result3 = add(50, 70);
console.log(result3)

const give5 = () => 5;
const result4 = give5();
console.log(result4);


const doMatch = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result
}
const result5 = doMatch(7, 5);
console.log(result5);