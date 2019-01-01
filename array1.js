var numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

// numbers[1] = "sunil";

console.log(numbers);

console.log(numbers.shift());

console.log(numbers.pop()); //delete last number
console.log("After Poping" +numbers);

numbers.push("Seven");

console.log("After Pushing" +numbers);

console.log(numbers);

var num2 =numbers.splice(1,1,"Sunil");// add in middel array

console.log(num2);

// console.log(numbers.unshift("jackie"));
