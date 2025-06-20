//variable const vs let : let type can update variable, const couldn't
// 5, 10 is integer and 5/10=0.5 is float
/* const a = 5;
const b = 10;

// sangjin is string
let myName = "sangjin";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
// Console, log type are object, method(=function)
console.log(typeof console);
console.log(typeof console.log);

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
console.log(player); */

// Function
/* function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}
plus(60, 8);
divide(98, 20);

// Function in function in object
const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " nice to meet you!");
  },
};
// Input data to function of object
console.log(player.name);
player.sayHello("lynn"); */

// Make calculator with return.
// return end function.
/* const calculator = {
  add: function (firstNum, secondNum) {
    return firstNum + secondNum;
  },
  subtract: function (firstNum, secondNum) {
    return firstNum - secondNum;
  },
  multiply: function (firstNum, secondNum) {
    return firstNum * secondNum;
  },
  divide: function (firstNum, secondNum) {
    return firstNum / secondNum;
  },
  power: function (firstNum, secondNum) {
    return firstNum ** secondNum;
  },
};
const addResult = calculator.add(2, 3);
const subResult = calculator.subtract(addResult, 10);
const multiResult = calculator.multiply(10, subResult);
const diviResult = calculator.divide(multiResult, addResult);
const powerResult = calculator.power(diviResult, subResult);

console.log(addResult, subResult, multiResult, diviResult, powerResult); */

// age prompt with parseInt, isNaN, if-else
/* const age = parseInt(prompt());
if (isNaN(age)) {
  console.log("Please wirte a number");
} else {
  console.log("Thank you for writing your age");
} */

// age prompt with if-else if
/* const age = parseInt(prompt());
if (isNaN(age) || age < 0) {
  console.log("Please wirte a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
} */

// Javascript on the browser

/*const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.innerText = "Mouse is gone!";
}
function handleMouseLeave() {
  title.innerText = "Mouse is here!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

/* 노마드 코더 챌린지 1
// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>


✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"

//window는 전역객체, h2는 일반객체라 querySelector 필요
const title = document.querySelector('h2');
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = 'The mouse is here!';
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = 'The mouse is gone!';
    title.style.color = colors[1];
  },
  handleResize: function () {
    title.innerText = 'You just resized!';
    title.style.color = colors[2];
  },
  handleContextMenu: function () {
    title.innerText = 'That was a right click!';
    title.style.color = colors[3];
  },
};
// h2에 접근
title.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
title.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
// window에 접근
window.addEventListener('resize', superEventHandler.handleResize);
window.addEventListener('contextmenu', superEventHandler.handleContextMenu); 
*/

// event : click with if-else of function
/* 
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
*/

// .add, .remove
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
*/

// .toggle === .add + .remove
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
