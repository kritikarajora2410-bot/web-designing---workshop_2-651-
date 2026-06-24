let person = {
    name:"John",
    age : 30,
    Class:"Btech"
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(typeof(person));

let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

let mixedArray = [1,"hello",true,[1,2,3],{name:"alice", age:25}];

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

 //find length of array
 console.log(numbers.length); 

function greet() {
    console.log("Hello World");

}
greet();

function multiply(a,b) {
    return a*b;


}
console.log(multiply(2,3));

let divide = function(a,b) {
    return a/b;

};
console.log(divide(10,2));
 let add = function(a,b) {
    return a+b;
 };  

 let sayHi = () => console.log("Hi");
 sayHi() ;

 let square = x => x*x;
 console.log(square(4)); 
 const greetUser = (name) => {
    console.log(`Hello,${name}!`);

 }
 greetUser("Alice");

 // map on array
 let newarray = [1,2,3,4,5];
 let squaredArray = newarray.map((num)=> num*5);
 console.log(squaredArray); //[5,10,15,20,25]
 let evenNumbers = [1,2,3,4,5];
 let filteredEvenNumbers =evenNumbers.
 filter(num => num%2 == 0);
 console.log(filteredEvenNumbers);
 let sum = [1,2,3,4,5];
 let total = sum.reduce((accumulator , currentValue) => accumulator + currentValue , 0);
 console.log(total);

 let Students = [
    {name: "Alice", marks:85},
    {name: "Bob", marks:92},
    {name: "Charlie", marks:78},

 ];

 let marks = Students.map(student => student.marks);
 console.log(marks);

 let names = Students.map(student => student.name);
 console.log(names);

 let topStudents = Students.filter
 (student => student.marks > 80);
 console.log(topStudents);

 let totalMarks = Students.reduce
 ((acc, student)=> acc+ student.marks , 0);
 console.log(totalMarks); //255



