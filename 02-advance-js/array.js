// let marks = [87,98,67,85,39];

// console.log(marks);
// console.log(typeof marks);
// console.log(marks.length);

// console.log(marks[0]) // 87
// console.log(marks[1]) // 98
// console.log(marks[4]) // 39

// let heroes = ["ironman","hulk","thor","shaktiman","chhotabheem"];

// for (let i = 0; i < heroes.length; i++){
//    console.log(heroes[i]);
// }

// for-of
// for(let hero of heroes){
//    console.log(hero)
// }

// let cities = ["delhi","punjab","bhubaneswar","mumbai","pune"];

// for (let city of cities){
//    console.log(city.toUpperCase())
// }

// 1. For a given array with marks of student -> [85,97,,37,76,60]. find the average
// marks of the entire class.

// let marks = [85,97,37,76,60];
// let sum = 0;
// for (let val of marks){
//    sum += val;
// }
// let avg = sum / marks.length;
// console.log('avg marks of the class = ${avg}');

// 2. for a given array with prices of 5 items of 4 yitems ->[250,645,]


// let items = [250, 645,300,900,50];
// let i = 0;
// for(let val of items){
//    console.log(`value at index ${i} = ${val}`);
//    let offer = val/10;
//    items[i] = items[i] - offer;
//    console.log(`value after offer = ${iems[i]}`);
//    i++;
// }


// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems)
// foodItems.push("chips", "burger", "paneer");
// console.log(foodItems)

// foodItems.pop();
// console.log(foodItems);


// let marks = [76,98,56,38,48];
// console.log(marks)
// let mark = marks.toString();
// console.log(mark)

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let odiaHeroes = ["sidhanta", "anubhav", "babushan"];

// let heroes = marvelHeroes.concat(odiaHeroes);
// console.log(heroes)

let marvelHeroes = ["thor", "spiderman", "ironman"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes)


let odiaHeroes = ['sidhanta', "anubhav", "babushan"];
odiaHeroes.shift();
console.log(odiaHeroes)