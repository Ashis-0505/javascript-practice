Intro on Javascript:-

- Javascript is high level programming language for building web application more efficient way.
- Javascript works on both client side as well as server side rendering.
- Javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e ES6 (echma script 6).
- In another way we called ES6 as the vanilla javascript.
- Javascript is mainly used for building logics or functionality of a web pages.

Variable:

- Varible is a container to store some data.
- There are 3 types of variable present over the javascript.
1. Let:-
    - Let is a type of variable which is used for changing the variable name later.
    - Now these days, most of the cases we used let for creating variable.
    - Let is a block scope code so we have been using let for most cases.

2. Var:-
    - var is a type of varible which is also used for changing the variable later stage.
    - var is used in oldest browser so now a days we are don't use var most of the cases.

3. Const:-
    - const is a type of variable where we can't change our data further.
    - const means constant to store some data like numbers, integers etc..

Rules for creating variable name:-
- variable names are case sensative "a", & "A" is different.
- Only letter, digit, underscore & $ is allowed. (not even space)
- Only letter, underscore or $ should be the 1st character only.
- Reserved words cannot be variables names.


Homework:-
1. difference between let & var.
2. difference between var & const.
3. what do you mean by hoasting.












































































































Loops in JS :-

- Loops are used to execute a piece of code again and again.
1. For Loop :-
    syntax -
    for (initialization; condition; updation){
        statement
    }

    ex - 
    for(let i = 6; <= 5; i++)
        console.log("web bocket")
    }

    web bocket
    web bocket
    web bocket
    web bocket
    web bocket

2. while loop :-
    syntax - 
    while (condition){
        statement
        updattion
    }


3. Do-while loop :-
    syntax -
    do {
        statement
        updation
    } while (condition)

    4. For-of loop :- it iterate on string & array.
    5. For-in loop :- it iterate over objects (key-value)


































Array on 35 :-

- array is collection of items.
- ex.
let heroes = ["ironman","thor","hulk","batman"];
let marks = ["ashis",76,""bbsr"];

- array index starting from "0".
- arr[0], arr[1], arr[2]........

Looping over a array :-

- loops -> iterable
- syntax :- 
for (let i = 0; i < arr.length, i++){
    // statement
}

practice quickly:-
1. For a given array with marks of students -> [85,97,37,76,60]. Find the average
marks of the entire class.
2. For a given array with prices of 5 items of 4 items>[250, 645, 300,900,50];
all items have an offer of 10% off on them. change the array to store final price after applying offer.

array method :-

- Push -> add an element to the end.
- pop -> delete from end
- toString -> conveets array to string
- concat -> joins multiple arrays $ return result.
- unshift -> add an element to the starting.
- shift -> delete from start
- slice() -> returns a piece of the array.
- splice() -> change original array (add, remove, replace)

Function :-

- block of code that perform a specific task. can be invoked whenever needed.
- syntax :-
function Defination :-

function functionName(parameter){
    // do some work
}

function Calling :- functionName

arrow function :-

- compact way of writting a function.
- syntax :-
const functionName = (param1, param2) => {
    // do some task
}