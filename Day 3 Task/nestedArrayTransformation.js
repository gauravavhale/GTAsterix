const data = [
  [1, 2, 3],
  [4, 5],
  [6, [7, 8]]
];

// Flatten, transform, and filter in one pipeline
const result = data
  .flat(Infinity)        // [1,2,3,4,5,6,7,8]
  .map(x => x * 2)       // [2,4,6,8,10,12,14,16]
  .filter(x => x > 5); 

console.log(result); // [6, 8, 10, 12, 14, 16]