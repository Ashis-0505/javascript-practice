// if condition

// let age = 20;

//if (age >= 18){
//      console.log("you can give vote")
// }

// if-else condition

let age = 13;
if(age >= 18){
        console.log("you can give vote";)
} else {
    console.log("you cna't give any vote");
// }

let age = 32;
if (age >= 21){
    console.log("you can apply for visa");
} else {
    console.log("you can't apply for visa")
}

// else-if condition

let mode = "dark";
lrt VideoColorSpace;

if(mode ==="dark"){
    color = "black";
} else if(mode === "blue"){
    color = "blue";
} else if(mode === "pink"){
    color = "pink";
} else {
    color = "can not definr";
}

console.log(color);

// practice question
// write a code which can give grades to students according to therir Scores:
// 80 - 100 (A)
// 70 - 79 (B)
// 60 - 69 (C)
// 50 - 59 (D)
// 0 - 49 (F)

let score =36;
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
} else if(score >=70 && score <= 79){
    grade = "B";
} else if (score >= 60 && score <=69){
    grade = "C";
} else if (score >=50 && score <=59){
    grade = "D";
} else if (score >= 0 && score <=49){
    grade = "F";
}

// switch case



var fruits = "apple";

switch(fruits){
    case "banana":
        console.log("banana is good");
        break;
    case "orrange":
        console.log("orange is good");
        break;
    case "apple":
        console.log("apple is good");
        break;
    default
}