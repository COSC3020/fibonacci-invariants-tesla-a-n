function fib(n, res = [0, 1]) { //takes n and an array with the first two elements being 0 and 1
    if (n < res.length) return res.slice(0, n + 1); //base case checks if the array has the correct amount of elements 
    res.push(res[res.length - 1] + res[res.length - 2]); //calculates and pushes the next fibonacci number onto the array 
    return fib(n, res); 
}

