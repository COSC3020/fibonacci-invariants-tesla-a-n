function fib(n) {
    return fibonacci(n); //calls helper function
}

function fibonacci(n, res = [0, 1]) { //takes n and an array with the first two elements being 0 and 1
    if (n < res.length) return res; //base case checks if the array has the correct amount of elements
    res.push(fibonacci(n-1, res)[n - 1] + fibonacci(n-2, res)[n - 2]); //calculates and pushes the next fibonacci number onto the array 
    return res;
}
