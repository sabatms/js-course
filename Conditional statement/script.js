const side1 = 5;
const side2 = 7;
const side3 = 3;

if (side1 === side2 && side2 === side3) {
  console.log("this is motasavi azlae");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("this is motasavi alsaghein");
} else {
  console.log("nothing");
}

// Switch case

const name = "ali";

switch (name) {
  case "ali":
    console.log(" you are ali");
    break;
  case "Rozhin":
    console.log("yoy are Rozhin");
    break;
  default:
    console.log("How are you?");
}

// Loop
// for loop :

for (let i = 5; i < 10; i++) {
  console.log(i);
}

const array = [2, 4, 6, 8];

for (let i = 0; i < array.length; i++) {
  console.log(array[i] * 5);
}

// for-of => only array

const array1 = [1, 3, 5, 7];
for (let i of array1) {
  console.log(i + 3);
}

// for-in => only Object

let array2 = { name: "saba", lastname: "tms", age: 26, city: "shz" };
for (let key in array2) {
  //console.log(key);
  console.log(array2[key]);
}

// practice :

let array3 = { name: "ali", lastname: "dehghan", age: 123, city: "teh" };
let keys = Object.keys(array3);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  //console.log(keys[i]);
  console.log(array3[keys[i]]);
}

// while :
//   while = دقیقا مثل for () هست .
// while =>  در این حلقه ما میتوانیم متغیر را در بیرون از حلقه تعریف کنیم ولی برای مابقی اینطور نیست

let status = true;
let i = 10;

while (status) {
  console.log(i);
  i++;
  if (i === 15) {
    status = false;
  }
}
// do-while
// یک بار
// کد رو اجرا میکنه بعد شرط در نظر میگیره و میگه تا زمانی این کارو انجام بده تا شرط برقرار هس

// let array4 = 1;
// do {
//   console.log(i);
//   i++;
// } while (array4 < 6);



// break - coutinue :
// break =>  متوقف کردن
// countinue => ادامه دادن

const array5 = [1, 2, 3, 4, "sa", "tms", "26", 7, 9];

for (const i of array5) {
  if (typeof i !== "number") {
    //break;
    continue;
  }
  console.log(i);
}
