// FIRST ASSIGNMENT (week 47, due Friday week 48)
// Calculate/Compare Area

// Case 1

const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2;
let theBiggerTriangleOne = null;

if (triangleOne > triangleTwo) {
    theBiggerTriangleOne = "Triangle One has the biggest area.";
} else if (triangleTwo > triangleOne) {
    theBiggerTriangleOne = "Triangle Two has the biggest area.";
} else {
    theBiggerTriangleOne = "The triangles One and Two have the same area.";
} 

console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2. ${theBiggerTriangleOne}`);


// Case 2

const triangleThree = (16.5 * 20.3) / 2;
const triangleFour = (20.3 * 16.5) / 2;
let theBiggerTriangleTwo = null;

if (triangleThree > triangleFour) {
    theBiggerTriangleTwo = "Triangle Three has the biggest area.";
} else if (triangleFour > triangleThree) {
    theBiggerTriangleTwo = "Triangle Four has the biggest area.";
} else {
    theBiggerTriangleTwo = "The triangles Three and Four have the same area.";
}

console.log(`Triangle Three has an area of ${triangleThree} cm2 and Triangle Four has an area of ${triangleFour} cm2. ${theBiggerTriangleTwo}`);


// Case 3

const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) / 2;
let theBiggerTriangleThree = null;

if (triangleFive > triangleSix) {
    theBiggerTriangleThree = "Triangle Five has the biggest area.";
} else if (triangleSix > triangleFive) {
    theBiggerTriangleThree = "Triangle Six has the biggest area.";
} else {
    theBiggerTriangleThree = "The triangles Five and Six have the same area.";
}

console.log(`Triangle Five has an area of ${triangleFive} cm2 and Triangle Six has an area of ${triangleSix} cm2. ${theBiggerTriangleThree}`);


// My thoughts: since there are three possible outcomes when comparing
// two triangle's sizes (one is bigger, the other is bigger or they are equally big),
// I figured an else if statement was most suitable. By giving the separate outcomes in the
// else if statement different strings, I gave each outcome/string the same variable -
// an entire string that was different depending on which else if statement that were true.

// Answer to assignment question:
// Since multiplication and division have the same order of presedence (left-to-right) I guess it is not vital in this case.
// However, I guess it is important to create a habit of being as thourough as possible even if it is not needed in a specific situation, like this example. 
