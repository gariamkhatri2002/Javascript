const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// HERE:The push() method adds the entire dc_heros array as a single element to the marvel_heros array.
// marvel_heros.push(dc_heros);        //not merge array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//MERGE ARRAY AND STORE IN NEW ARRAY
const mergearr=marvel_heros.concat(dc_heros);       
console.log(mergearr[3]);                       //superman
console.log(mergearr);                         //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//MERGE THROUGH Spread Operator (...):
// The spread operator is used to expand elements of an array (or object) into a new context.
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);                   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_arr=[1,2,3,[4,5,6],2,6,[7,8,[9,3,5]]]
console.log(another_arr);                //[ 1, 2, 3, [ 4, 5, 6 ], 2, 6, [ 7, 8, [ 9, 3, 5 ] ] ]


// The flat() method in JavaScript is used to flatten nested arrays into a single array
// Defaults to 1 if not specified
// Use Infinity to flatten all levels of a nested array.
const real_another_arr=another_arr.flat(Infinity);
console.log(real_another_arr);




console.log(Array.isArray(another_arr));   //check it's array or not   (yes than true otherwise false)
// used to create a new array from any iterables like array, objects, and strings
console.log(Array.from("garima"));         //[ 'g', 'a', 'r', 'i', 'm', 'a' ]
console.log(Array.from({name:"garima"}));       //[] not convert in array


const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score3));        //[ 100, 200, 300 ]   create a new array
