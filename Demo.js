console.log("Hello world");

console.log("Hello");
// Function to calculate the sum of an array
function calculateSum(arr) {
    if (!Array.isArray(arr)) {
        console.error("Input must be an array!");
        return;
    }

    let sum = 0;
    for (let num of arr) {
        sum += num; // Add each number to the sum
    }

    return sum;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const total = calculateSum(numbers);

console.log("The sum of the array is:", total);

