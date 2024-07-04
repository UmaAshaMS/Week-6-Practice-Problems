const numbers = [1, 2, 3, 4, 5, 3, 2, 1];
const uniqueNumbers = numbers.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, []);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
