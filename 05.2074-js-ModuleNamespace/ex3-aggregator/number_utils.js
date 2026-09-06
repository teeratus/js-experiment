export const isEven = (n) => n % 2 === 0;
export const isOdd = (n) => n % 2 !== 0;
export const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);