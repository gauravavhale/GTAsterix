let person = { name: "John" };
let user = person; 

console.log("Before change ");
console.log(person); // John
console.log(user);   // John

user.name = "Doe";

console.log("After change ");
console.log(person); // Doe
console.log(user);   // Doe
