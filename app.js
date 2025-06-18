//variable const vs let : let type can update variable, const couldn't
// 5, 10 is integer and 5/10=0.5 is float
const a = 5;
const b = 10;

// sangjin is string
let myName = "sangjin";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

// change let variable
myName = "yusangjin";

console.log("your new name is " + myName);

// null, true, false have the intention of value but, undefined doesn't
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

// using array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const days0fWeek = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, 3, 4, false, true, "hello", "world"];
console.log(days0fWeek, nonsense);
// Get item from array
console.log(days0fWeek[5]);
// Add one more day to the array
days0fWeek.push("sun");
console.log(days0fWeek);

// object.property -> console is object, log is property
const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
// Access internal property of an object
console.log(player.name);
// Property of object can be updated to other value
player.points = player.points + 15;
console.log(player);
// Add property to object
player.lastName = "Yu";
console.log(player);
