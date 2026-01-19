const customReducer = (arr, callback, initialVal) => {

  let accumulator = initialVal;

  function process(item) {
    if (Array.isArray(item)) {
      for (let value of item) {
        process(value);
      }
    } else {
      accumulator = callback(accumulator, item);
    }
  }

  process(arr);
  return accumulator;

};

let arr = [1, [2,3,4,5,6], 56, 8, [3,8,9,[3,56,2]]];

const result = customReducer(arr, (acc, curr) => acc + curr, 0);
console.log(result); // 166