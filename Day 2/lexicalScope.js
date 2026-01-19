function outer() {
  let message = "Hello from outer!";
  function inner() {
    console.log(message);
  }
  inner();
}

outer(); // Hello from outer!
// ------------------------------------------------// 

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
//-------------------------------------------------// 

function multiplier(factor) {
  return function(number) {
    return number * factor; 
  };
}
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
//-------------------------------------------------//

let globalVar = "Global";

function outer() {
  let outerVar = "Outer";
  function inner() {
    let innerVar = "Inner";
    console.log(globalVar, outerVar, innerVar);
  }
  inner();
}

outer(); // Global Outer Inner
//-------------------------------------------------//

function secretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    }
  };
}
const holder = secretHolder("initial");
console.log(holder.getSecret()); // "initial"
holder.setSecret("updated");
console.log(holder.getSecret()); // "updated"
//-------------------------------------------------//