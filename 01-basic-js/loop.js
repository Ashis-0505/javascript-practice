// print web bocket 5 times

// let i;
// for(i = 1; <=5; i++)
//      console.log("web bocket")
// }

// calculate the sum of i to 5 (for loop)

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//  sum += i;
// }

// console.log("The sum is:", sum);





// let i = 1;
// do {
//     console.log("web bocket")
//     i++;
// } while (i <= 5)

// let str = "javascript";
// let size = 0;
// for (let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("string size = ", size)

let student = {
    name : "Ashis Ranjan Jena",
    age : 19,
    CGPA : 9.9,
    ispass : true,
}

// left side part is my keys & right side are the values of that keys.
// here name, cgpa, age, ispass - keys
// Ashis Ranjan Jena, 19, 9.9, true - values

for (let key in student){
    console.log("key = ", key, "value = ", student[key])
}